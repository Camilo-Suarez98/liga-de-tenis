"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc';
import Cookies from 'js-cookie';

import { useAuth } from '../../utils/AuthContext';

const Login = () => {
  const [userData, setUserData] = useState({});
  const [userError, setUserError] = useState(false);
  const router = useRouter();
  const { setIsLoggedIn } = useAuth();
  const { data: session } = useSession();
  const name = session?.user.name?.split(' ')[0];
  const lastName = session?.user.name?.split(' ')[1];
  const email = session?.user?.email;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const fetchConfig = {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/local/login`, fetchConfig);
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
      setUserError(true);
    };
  };

  const hangleGoogleLogin = () => {
    signIn();
  };

  useEffect(() => {
    if (session?.user?.name !== undefined) {
      handleAfterGoogleLogin();
    }
  }, [session?.user?.name]);

  const handleAfterGoogleLogin = async () => {
    try {
      const data = {
        name,
        lastName,
        email
      };

      const fetchConfig = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/google/login`, fetchConfig);
      const { token, profile } = await response.json();

      Cookies.set('token', token, { path: '/' });
      Cookies.set('name', profile.name, { path: '/' });
      Cookies.set('lastName', profile.lastName, { path: '/' });
      Cookies.set('email', profile.email, { path: '/' });
      Cookies.set('role', profile.role, { path: '/' });

      router.push('/torneos');
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-full flex flex-col items-center mt-10'>
      <h2 className='text-4xl my-4 sm:text-5xl'>Iniciar sesión</h2>
      <form onSubmit={handleLogin} className='w-56 border-2 border-blue-500 py-3 px-6 rounded-xl sm:w-72'>
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
          {userError && <p className='text-red-500'>Usuario no existe</p>}
        </section>
        <section className='my-3 flex flex-col'>
          <button
            type='submit'
            className='bg-blue-500 rounded-lg p-2 transition duration-300 hover:bg-transparent hover:border-2 hover:border-blue-500 min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 sm:text-xl md:mt-6'
          >
            Ingresar
          </button>
        </section>
        <h3>
          ¿No tienes cuenta?
          {' '}
          <Link
            className='text-blue-500'
            href='/registro'
          >
            Ingresa aquí
          </Link>
        </h3>
        <h4 className='text-center'>Ó</h4>
        <button
          onClick={hangleGoogleLogin}
          className='border-blue-500 border-2 transition duration-300 w-full flex items-center px-3 rounded-xl hover:bg-blue-500 min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 sm:text-xl md:mt-2'
        >
          <FcGoogle className='mr-2' />
          Ingresa con Google
        </button>
      </form>
    </div>
  );
};

export default Login;
