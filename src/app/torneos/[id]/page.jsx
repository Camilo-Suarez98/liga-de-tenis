'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useJwt } from "react-jwt";

import Loader from '@/components/Loader';

async function getTournament(detail) {
  const tournamentResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/tournament/${detail}`);
  return tournamentResponse.json();
};

async function getUser(detail) {
  const userResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/${detail}`);
  return userResponse.json();
};

const TournamentDetailComponent = ({ params }) => {
  const [tournament, setTournament] = useState({});
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false)
  const token = Cookies.get('token');
  const isAdmin = Cookies.get('role') === 'true';
  const router = useRouter();
  const { decodedToken } = useJwt(token)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tournamentData = await getTournament(params.id)
        const userData = await getUser(decodedToken?.id)
        setTournament(tournamentData.data)
        setUser(userData.data)
        setLoading(false)
      } catch (error) {
        throw new Error(error)
      }
    }
    fetchData()
  }, [params.id, decodedToken]);

  const handleEnrollUsers = async () => {
    const userId = user?._id;
    const tournamentId = params.id;
    const fetchConfig = {
      method: 'POST',
      body: JSON.stringify({ userId, tournamentId }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/tournament/${tournamentId}/enroll`, fetchConfig);
      const resInfo = await res.json()

      if (resInfo.data === 'Error: User already registered in this tournament') {
        setErrorMessage(true);
        return
      }
      router.push('/torneos');
    } catch (error) {
      throw new Error(error)
    }
  };

  const handleDeleteTournament = async () => {
    const fetchConfig = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    };

    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/tournament/${params.id}`, fetchConfig);
      router.push('/admin');
    } catch (error) {
      throw new Error(error);
    }
  };

  if (loading) {
    return <Loader />
  };

  return (
    <div className='flex flex-col items-center justify-start mt-10'>
      <h1 className='text-3xl text-center mb-6'>Detalle del torneo</h1>
      <h1 className='text-blue-500 text-3xl text-center min-[450px]:text-5xl'>{tournament?.name}</h1>
      <p className='mt-4 text-center text-xl min-[450px]:text-3xl xl:w-11/12'>{tournament?.description}</p>
      <p className='mt-4 text-center text-xl min-[450px]:text-3xl'>Fecha: {tournament?.date}</p>
      <p className='mt-4 text-center text-xl min-[450px]:text-3xl'>Lugar: {tournament?.location}, {tournament?.city}</p>
      <p className='mt-4 text-center text-xl min-[450px]:text-3xl'>Precio: ${tournament?.price}</p>
      <button
        onClick={handleEnrollUsers}
        className='bg-blue-500 rounded-lg p-2 mt-4 transition duration-300 hover:bg-blue-400 min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 sm:text-xl md:mt-6'
      >
        Inscibirme
      </button>
      {errorMessage && <p>El usuario ya esta registrado en este torneo</p>}
      {isAdmin &&
        <div className='w-1/2 flex justify-evenly mt-7 lg:w-1/4'>
          <Link href={`/torneos/${params.id}/editar-torneo`}
            className='bg-blue-500 rounded-lg p-2 transition duration-300 hover:bg-blue-400 min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 sm:text-xl'
          >
            Editar
          </Link>
          <button
            onClick={handleDeleteTournament}
            className='bg-red-500 rounded-lg p-2 transition duration-300 hover:bg-red-400 min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 sm:text-xl'
          >
            Eliminar
          </button>
        </div>
      }
    </div>
  );
};

export default TournamentDetailComponent;
