import React from 'react'
import Loader from '../(components)/Loader';
import Link from 'next/link';

async function getTournaments() {
  const tournamentResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/tournament`);
  return tournamentResponse.json();
};

export default async function Tournament() {
  const tournaments = await getTournaments();

  return (
    <div className='flex flex-col items-center justify-start'>
      <h2 className='text-3xl sm:text-4xl my-10'>Torneos disponibles</h2>
      {/* <Suspense fallback={<Loader />}> */}
      <div className='w-11/12 my-0 m-auto flex flex-wrap justify-center gap-6'>
        {tournaments.data.map(tournament => {
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
      {/* </Suspense> */}
    </div>
  );
};
