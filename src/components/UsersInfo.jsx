'use client'
import React, { useState, useEffect } from 'react'

const UsersInfo = () => {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const usersResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user`);
    return usersResponse.json();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersInfo = await getUsers()
        setUsers(usersInfo?.data);
      } catch (error) {
        throw new Error(error)
      };
    };

    fetchData();
  }, []);

  return (
    <div className='content-table-2'>
      <table className='table'>
        <thead className='header-table'>
          <tr className='text-white'>
            <th className='pad-row section-main'>Nombre</th>
            <th className='pad-row section-secondary'>Apellido</th>
            <th className='pad-row section-secondary'>Correo</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return (
              <tr
                key={user._id}
                className='row-table'
              >
                <td className='product-letter pad-row-2 text-center'>{user.name}</td>
                <td className='table-letter pad-row-2 text-center'>{user.lastName}</td>
                <td className='pad-row-2 text-center'>{user.email}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {users?.data?.map(user => {
        return (
          <div key={user._id}>{user.name}</div>
        )
      })}
    </div>
  )
}

export default UsersInfo