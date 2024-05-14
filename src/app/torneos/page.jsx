'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

async function getTournaments() {
  const tournamentResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/tournament`);
  return tournamentResponse.json();
};

export default function Tournament() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tournamentsInfo = await getTournaments();
        setTournaments(tournamentsInfo.data);
      } catch (error) {
        throw new Error(error);
      };
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-col items-center justify-start'>
      <h2 className='text-3xl sm:text-4xl my-10'>Torneos disponibles</h2>
      <div className='w-11/12 my-0 m-auto flex flex-wrap justify-center gap-6'>
        {tournaments.map(tournament => {
          return (
            <div
              key={tournament._id}
              className='border-2 border-blue-500 p-3 rounded-xl sm:w-72'
            >
              <h2 className='text-3xl text-blue-500'>{tournament.name}</h2>
              <h3 className='text-xl'>Lugar: {tournament.location}, {tournament.city}</h3>
              <p className='text-xl'>Fecha: {tournament.date}</p>
              <Link
                href={`/torneos/${tournament._id}`}
                className='text-blue-500 text-center hover:font-bold'
              >
                Ver más
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  );
};
