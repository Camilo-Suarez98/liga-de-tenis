import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className='w-full flex flex-col items-center mt-10'>
      <h2 className='text-4xl my-4'>Iniciar sesión</h2>
      <form className='w-56 border-2 border-blue-500 p-3 rounded-xl'>
        <section className='my-3 flex flex-col'>
          <label htmlFor="email">Correo: </label>
          <input type="text" name="email" id="email" />
        </section>
        <section className='my-3 flex flex-col'>
          <label htmlFor="password">Contraseña: </label>
          <input type="text" name="password" id="password" />
        </section>
        <section className='my-5 flex flex-col'>
          <button
            type='submit'
            className='bg-blue-500 rounded-lg'
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
      </form>
    </div>
  )
}

export default Login