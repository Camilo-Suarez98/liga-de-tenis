/* eslint-disable @next/next/no-async-client-component */
'use client';
import Loader from '@/app/(components)/Loader';
import React, { Suspense } from 'react';

async function getTournament(detail) {
  const tournamentResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/tournament/${detail}`);
  return tournamentResponse.json();
};

export default async function TournamentDetail({ params }) {
  const tournament = await getTournament(params.id);
  const { data } = tournament;

  return (
    <div className='flex flex-col items-center justify-start mt-16'>
      <Suspense fallback={<Loader />}>
        <h1 className='text-blue-500 text-3xl text-center min-[450px]:text-5xl'>{data?.name}</h1>
        <p className='mt-4 text-center text-xl min-[450px]:text-3xl'>{data?.description}</p>
        <p className='mt-4 text-center text-xl min-[450px]:text-3xl'>Fecha: {data?.date}</p>
        <p className='mt-4 text-center text-xl min-[450px]:text-3xl'>Lugar: {data?.location}, {data?.city}</p>
        <p className='mt-4 text-center text-xl min-[450px]:text-3xl'>Precio: ${data?.price}</p>
        <button
          className='bg-blue-500 rounded-lg p-2 mt-4 transition duration-300 hover:bg-blue-400 min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 sm:text-xl md:mt-6'
        >
          Inscibirme
        </button>
      </Suspense>
    </div>
  );
};
