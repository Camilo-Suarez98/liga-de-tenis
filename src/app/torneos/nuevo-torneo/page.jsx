'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const NewTournament = () => {
  const [newTournament, setNewTournament] = useState({});
  const [errorData, setErrorData] = useState(false)
  const router = useRouter();
  const token = Cookies.get('token')

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewTournament({
      ...newTournament,
      [name]: value
    });
  };
  const handleCreateTournament = async (e) => {
    e.preventDefault()

    const fetchConfig = {
      method: 'POST',
      body: JSON.stringify(newTournament),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    };

    try {
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/tournament`, fetchConfig);
      router.push('/admin')
    } catch (error) {
      setErrorData(true)
    }
  }

  return (
    <div className='w-full flex flex-col items-center mt-10'>
      <h2 className='text-4xl my-4 sm:text-5xl'>Nuevo Torneo</h2>
      <form onSubmit={handleCreateTournament} className='w-56 border-2 border-blue-500 p-3 rounded-xl sm:w-72'>
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
            onChange={handleChange}
            className='rounded-lg text-black p-1'
          />
        </section>
        <section className='my-3 flex flex-col'>
          <button
            type='submit'
            className='bg-blue-500 rounded-lg p-2 transition duration-300 hover:bg-transparent hover:border-2 hover:border-blue-500 min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 sm:text-xl md:mt-6'
          >
            Crear Torneo
          </button>
        </section>
      </form>
    </div>
  );
};

export default NewTournament;
