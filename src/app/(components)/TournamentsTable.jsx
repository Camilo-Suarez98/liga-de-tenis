import Link from 'next/link';
import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { BiSolidEdit } from 'react-icons/bi'

const TournamentsTable = async () => {
  async function getTournaments() {
    const tournamentResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/tournament`);
    return tournamentResponse.json()
  };

  const tournaments = await getTournaments()

  return (
    <div className='content-table'>
      <table className='table'>
        <thead className='header-table'>
          <tr className='text-white'>
            <th className='pad-row section-main'>Nombre</th>
            <th className='pad-row section-secondary'>Ciudad</th>
            <th className='pad-row section-secondary'>Fecha</th>
            <th className='pad-row section-secondary'>Participantes</th>
            <th className='pad-row section-secondary'></th>
          </tr>
        </thead>
        <tbody>
          {tournaments?.data?.map(tournament => {
            return (
              <tr
                key={tournament._id}
                className='row-table'
              >
                <td className='product-letter pad-row-2 text-center'>{tournament.name}</td>
                <td className='table-letter pad-row-2 text-center'>{tournament.city}</td>
                <td className='table-letter pad-row-2 text-center'>{tournament.date}</td>
                <td className='table-letter pad-row-2 text-center'>
                  {tournament.participants.length === 0 && 'No hay participantes'}
                </td>
                <td className='pad-row-2 text-center flex items-center justify-evenly'>
                  <Link href='/' className='text-blue-500'><BiSolidEdit /></Link>
                  {' / '}
                  <button className='text-red-500'><BsTrash /></button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TournamentsTable