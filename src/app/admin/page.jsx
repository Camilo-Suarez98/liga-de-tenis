'use client';
import Link from 'next/link';

import TournamentsTable from '@/components/TournamentsTable';
import UsersInfo from '@/components/UsersInfo';
import authenticatedRoute from '@/components/HOC/AuthenticatedRoute';

const Dashboard = () => {
  return (
    <div className='flex flex-col items-center justify-start mt-10'>
      <div className='flex flex-col items-center my-5 sm:flex-row sm:justify-around sm:w-full'>
        <h2 className='text-4xl my-4'>Lista de Torneos</h2>
        <Link
          href='/torneos/nuevo-torneo'
          className='bg-blue-500 rounded-lg p-2 transition duration-300 hover:bg-blue-400 min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 sm:text-xl'
        >
          Nuevo Torneo
        </Link>
      </div>
      <TournamentsTable />
      <h2 className='text-4xl text-left mt-12 mb-6'>Lista de usuarios</h2>
      <UsersInfo />
    </div>
  );
};

export default authenticatedRoute(Dashboard, { pathAfterFailure: '/' });
