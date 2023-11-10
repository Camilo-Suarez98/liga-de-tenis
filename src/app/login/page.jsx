import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center mt-10'>
      <h2 className='text-4xl'>Iniciar sesión</h2>
      <form className='w-56'>
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
      </form>
    </div>
  )
}

export default Login