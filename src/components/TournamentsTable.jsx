'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const TournamentsTable = () => {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true)

  async function getTournaments() {
    const tournamentResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/tournament`);
    return tournamentResponse.json();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tournamentsInfo = await getTournaments()
        setTournaments(tournamentsInfo.data);
        setLoading(false)
      } catch (error) {
        throw new Error(error)
      };
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />
  }

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
          {tournaments?.map(tournament => {
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
                <td className='pad-row-2 text-center hover:text-blue-400 hover:font-bold'>
                  <Link href={`/torneos/${tournament._id}`} className='text-blue-500'>Ver más</Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TournamentsTable;
