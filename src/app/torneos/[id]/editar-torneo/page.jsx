'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Loader from '@/components/Loader';

async function getTournament(detail) {
  const tournamentResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/tournament/${detail}`);
  return tournamentResponse.json();
}

const EditTournament = ({ params }) => {
  const [tournament, setTournament] = useState({
    name: "",
    description: "",
    date: "",
    location: "",
    city: "",
    price: ""
  });
  const [loading, setLoading] = useState(true);
  const token = Cookies.get('token');
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tournamentData = await getTournament(params.id)
        setTournament(tournamentData.data)
        setLoading(false)
      } catch (error) {
        throw new Error(error)
      }
    }

    fetchData()
  }, [params.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTournament({
      ...tournament,
      [name]: value
    });
  };

  const handleEditTournament = async (e) => {
    e.preventDefault();

    const newDataTournament = { ...tournament };

    const fetchConfig = {
      method: 'PUT',
      body: JSON.stringify(newDataTournament),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    };

    await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/tournament/${params.id}`, fetchConfig);
    router.push('/admin');
  };

  if (loading) {
    return <Loader />
  };

  return (
    <div className='w-full flex flex-col items-center mt-10'>
      <h2 className='text-4xl my-4 sm:text-5xl'>Editar Torneo</h2>
      <form onSubmit={handleEditTournament} className='w-56 border-2 border-blue-500 p-3 rounded-xl sm:w-72'>
        <section className='my-3 flex flex-col'>
          <label
            htmlFor="name"
            className='sm:text-lg'
          >
            Nombre:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={tournament.name}
            onChange={handleChange}
            className='rounded-lg text-black p-1'
          />
        </section>
        <section className='my-3 flex flex-col'>
          <label
            htmlFor="description"
            className='sm:text-lg'
          >
            Descripción:
          </label>
          <textarea
            name="description"
            id="description"
            value={tournament.description}
            onChange={handleChange}
            className='rounded-lg text-black p-1'
          />
        </section>
        <section className='my-3 flex flex-col'>
          <label
            htmlFor="date"
            className='sm:text-lg'
          >
            Fecha:
          </label>
          <input
            type="date"
            name="date"
            id="date"
            placeholder={tournament.date}
            onChange={handleChange}
            className='rounded-lg text-black p-1'
          />
        </section>
        <section className='my-3 flex flex-col'>
          <label
            htmlFor="location"
            className='sm:text-lg'
          >
            Lugar:
          </label>
          <input
            type="text"
            name="location"
            id="location"
            value={tournament.location}
            onChange={handleChange}
            className='rounded-lg text-black p-1'
          />
        </section>
        <section className='my-3 flex flex-col'>
          <label
            htmlFor="city"
            className='sm:text-lg'
          >
            Ciudad:
          </label>
          <input
            type="text"
            name="city"
            id="city"
            value={tournament.city}
            onChange={handleChange}
            className='rounded-lg text-black p-1'
          />
        </section>
        <section className='my-3 flex flex-col'>
          <label
            htmlFor="price"
            className='sm:text-lg'
          >
            Precio:
          </label>
          <input
            type="text"
            name="price"
            id="price"
            value={tournament.price}
            onChange={handleChange}
            className='rounded-lg text-black p-1'
          />
        </section>
        <section className='my-3 flex flex-col'>
          <button
            type='submit'
            className='bg-blue-500 rounded-lg p-2 transition duration-300 hover:bg-transparent hover:border-2 hover:border-blue-500 min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 sm:text-xl md:mt-6'
          >
            Editar Torneo
          </button>
        </section>
      </form>
    </div>
  );
};

export default EditTournament;
