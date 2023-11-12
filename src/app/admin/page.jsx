import React, { Suspense } from 'react'
// import authenticatedRoute from '../(components)/HOC/AuthenticatedRoute'

async function getUsers() {
  const usersResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user`)
  return usersResponse.json()
}

export default async function Dashboard() {
  const res = await getUsers()
  console.log(res.data);
  return (
    <div>
      <h2>Lista de usuarios</h2>
      {res.data.map(user => {
        return (
          <h1 key={user._id}>{user.name}</h1>
        )
      })}
    </div>
  )
}