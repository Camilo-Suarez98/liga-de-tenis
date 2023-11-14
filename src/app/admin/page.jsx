import { Suspense, lazy } from 'react';
import Link from 'next/link';
import Loader from '../(components)/Loader';
const TournamentsTable = lazy(() => import('../(components)/TournamentsTable'));
const UsersInfo = lazy(() => import('../(components)/UsersInfo'));

export default function Dashboard() {
  return (
    <div className='flex flex-col items-center justify-start mt-10'>
      <div className='flex justify-around items-center sm:w-full'>
        <h2 className='text-4xl my-4'>Lista de Torneos</h2>
        <Link
          href='/torneos/nuevo-torneo'
          className='bg-blue-500 rounded-lg p-2 transition duration-300 hover:bg-transparent hover:border-2 hover:border-blue-500 min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 sm:text-xl'
        >
          Nuevo Torneo
        </Link>
      </div>
      <Suspense fallback={<Loader />}>
        <TournamentsTable />
      </Suspense>
      <h2>Lista de usuarios</h2>
      <Suspense fallback={<Loader />}>
        <UsersInfo />
      </Suspense>
    </div>
  );
};