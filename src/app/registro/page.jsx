"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import Cookies from 'js-cookie'

const Register = () => {
  const [newUserData, setNewUserData] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target

    setNewUserData({
      ...newUserData,
      [name]: value
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()

    Cookies.set('name', userData.name)
  }

  return (
    <div className='w-full flex flex-col items-center mt-10'>
      <h2 className='text-4xl my-4'>Registro</h2>
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
            type="text"
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
            type="text"
            name="password"
            id="password"
            onChange={handleChange}
            className='rounded-lg text-black p-1'
          />
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
  )
}

export default Register