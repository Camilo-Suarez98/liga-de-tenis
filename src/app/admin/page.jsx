/* eslint-disable @next/next/no-async-client-component */
'use client';
import React, { Suspense } from 'react';
import { useRouter } from 'next/navigation';
import Loader from '../(components)/Loader';

async function getUsers() {
  const usersResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user`);
  return usersResponse.json();
};

async function getTournaments() {
  const tournamentResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/tournament`);
  return tournamentResponse.json();
};

export default async function Dashboard() {
  const router = useRouter();
  const users = await getUsers();
  const tournaments = await getTournaments();

  const handleCreateTournament = () => {
    router.push('/torneos/nuevo-torneo')
  };

  return (
    <div className='flex flex-col items-center justify-start mt-10'>
      <div className='flex justify-around items-center sm:w-full'>
        <h2 className='text-4xl my-4 sm:text-5xl'>Lista de Torneos</h2>
        <button
          onClick={handleCreateTournament}
          className='bg-blue-500 rounded-lg p-2 transition duration-300 hover:bg-transparent hover:border-2 hover:border-blue-500 min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 sm:text-xl'
        >
          Nuevo Torneo
        </button>
      </div>
      <Suspense fallback={<Loader />}>
        <table>
          <thead>
            <tr>
              <th>
                <span>Nombre</span>
              </th>
              <th>
                <span>Ciudad</span>
              </th>
              <th>
                <span>Fecha</span>
              </th>
              <th>
                <span>Participantes</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {tournaments.data.map(tournament => {
              return (
                <tr key={tournament._id}>
                  <td>{tournament.name}</td>
                  <td>{tournament.city}</td>
                  <td>{tournament.city}</td>
                  <td>{tournament.participants.length === 0 ? 'No hay participantes' : tournament.participants}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Suspense>
      <h2>Lista de usuarios</h2>
      <Suspense fallback={<Loader />}>
        {users.data.map(user => {
          return (
            <div key={user._id}>{user.name}</div>
          )
        })}
      </Suspense>
    </div>
  );
};