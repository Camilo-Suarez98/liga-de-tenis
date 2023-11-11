import React from 'react'
import Link from 'next/link'

const Register = () => {
  return (
    <div className='w-full flex flex-col items-center mt-10'>
      <h2 className='text-4xl my-4'>Registro</h2>
      <form className='w-56 border-2 border-blue-500 p-3 rounded-xl'>
        <section className='my-3 flex flex-col'>
          <label htmlFor="name">Nombre: </label>
          <input type="text" name="name" id="name" />
        </section>
        <section className='my-3 flex flex-col'>
          <label htmlFor="lastName">Apellido: </label>
          <input type="text" name="lastName" id="lastName" />
        </section>
        <section className='my-3 flex flex-col'>
          <label htmlFor="email">Correo: </label>
          <input type="text" name="email" id="email" />
        </section>
        <section className='my-3 flex flex-col'>
          <label htmlFor="password">Contraseña: </label>
          <input type="text" name="password" id="password" />
        </section>
        <section className='my-3 flex flex-col'>
          <button type='submit'>Ingresar</button>
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
      </form>
    </div>
  )
}

export default Register