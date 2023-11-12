import React, { Suspense } from 'react'
import Link from 'next/link'
import Loader from '../(components)/Loader'

async function getUsers() {
  const usersResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user`)
  return usersResponse.json()
}

export default async function Dashboard() {

  const res = await getUsers()
  console.log(res.data);

  return (
    <div>
      <h2>Lista de Torneos</h2>
      {/* <Link
        href='/torneos/nuevo-torneo'
        className='bg-blue-500  rounded-lg p-2 transition duration-300 hover:bg-transparent hover:border-2 hover:border-blue-500 min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 sm:text-xl md:mt-6'
      >
        Nuevo Torneo
      </Link> */}
      {/* table here */}
      <h2>Lista de usuarios</h2>
      <Suspense fallback={<Loader />}>
        {res.data.map(user => {
          return (
            <div key={user._id}>{user.name}</div>
          )
        })}
      </Suspense>
    </div>
  )
}