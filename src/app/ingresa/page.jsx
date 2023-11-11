import Link from 'next/link'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
  return (
    <div className='w-full flex flex-col items-center mt-10'>
      <h2 className='text-4xl my-4 sm:text-5xl'>Iniciar sesión</h2>
      <form className='w-56 border-2 border-blue-500 p-3 rounded-xl sm:w-72'>
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
            className='rounded-lg text-black p-1'
          />
        </section>
        <section className='my-5 flex flex-col'>
          <button
            type='submit'
            className='bg-blue-500 rounded-lg p-2'
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
        <h4 className='text-center'>OR</h4>
        <button
          className='border-blue-500 border-2 transition duration-300 w-full flex items-center mt-2 px-3 rounded-xl hover:bg-blue-500 min-[320px]:px-2 min-[320px]:py-1 sm:px-3 sm:py-2 sm:text-xl md:mt-6'
        >
          <FcGoogle className='mr-2' />
          Ingresa con Google
        </button>
      </form>
    </div>
  )
}

export default Login