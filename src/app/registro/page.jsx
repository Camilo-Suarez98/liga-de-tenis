"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../(utils)/AuthContext';
import Cookies from 'js-cookie';

const Register = () => {
  const [newUserData, setNewUserData] = useState({});
  const [errorData, setErrorData] = useState(false)
  const router = useRouter();
  const { setIsLoggedIn } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewUserData({
      ...newUserData,
      [name]: value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const fetchConfig = {
      method: 'POST',
      body: JSON.stringify(newUserData),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user`, fetchConfig);
      const info = await response.json();
      const { profile, token } = info;

      Cookies.set('token', token, { path: '/' });
      Cookies.set('name', profile.name, { path: '/' });
      Cookies.set('lastName', profile.lastName, { path: '/' });
      Cookies.set('email', profile.email, { path: '/' });
      Cookies.set('role', profile.role, { path: '/' });

      if (!profile.role) {
        router.push('/torneos')
      } else {
        router.push('/admin')
      };

      setIsLoggedIn(true);
    } catch (error) {
      setErrorData(true);
    };
  };

  return (
    <div className='w-full flex flex-col items-center mt-10'>
      <h2 className='text-4xl my-4 sm:text-5xl'>Registro</h2>
      <form onSubmit={handleRegister} className='w-56 border-2 border-blue-500 p-3 rounded-xl sm:w-72'>
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
            htmlFor="lastName"
            className='sm:text-lg'
          >
            Apellido:
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={handleChange}
            className='rounded-lg text-black p-1'
          />
        </section>
        <section className='my-3 flex flex-col'>
          <label
            htmlFor="email"
            className='sm:text-lg'
          >
            Correo:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            className='rounded-lg text-black p-1'
          />
        </section>
        <section className='my-3 flex flex-col'>
          <label
            htmlFor="password"
            className='sm:text-lg'
          >
            Contraseña:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className='rounded-lg text-black p-1'
          />
          {errorData && <p className='text-red-500'>Error al registrar al usuario, inténtelo de nuevo</p>}
        </section>
        <section className='my-3 flex flex-col'>
          <button
            type='submit'
            className='bg-blue-500 rounded-lg p-2 transition duration-300 hover:bg-transparent hover:border-2 hover:border-blue-500 min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 sm:text-xl md:mt-6'
          >
            Crear cuenta
          </button>
        </section>
        <h3>
          ¿Ya tienes cuenta?
          {' '}
          <Link
            className='text-blue-500'
            href='/ingresa'
          >
            Ingresa aquí
          </Link>
        </h3>
        <h4 className='text-center'>Ó</h4>
        <button
          className='border-blue-500 border-2 transition duration-300 w-full flex items-center px-3 rounded-xl hover:bg-blue-500 min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 sm:text-xl md:mt-2'
        >
          <FcGoogle className='mr-2' />
          Ingresa con Google
        </button>
      </form>
    </div>
  );
};

export default Register;
