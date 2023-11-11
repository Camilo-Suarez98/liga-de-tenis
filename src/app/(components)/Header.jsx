import Link from 'next/link'
import React from 'react'

const Header = async () => {

  return (
    <header className='h-16 flex justify-between items-center'>
      <section>
        <Link href='/'>
          <h1>Liga de tenis NJS</h1>
        </Link>
      </section>
      <section className='flex justify-evenly items-center w-60'>
        <Link href='/'>Inicio</Link>
        <Link href='/torneos'>Torneos</Link>
        <Link href='/login'>Ingresar</Link>
      </section>
    </header>
  )
}

export default Header