'use client'
import Cookies from 'js-cookie';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useJwt } from "react-jwt";

const Header = () => {
  const router = useRouter()
  const token = Cookies.get('token')

  const { isExpired } = useJwt(token)

  const handleLogOut = () => {
    Cookies.remove('token')
    Cookies.remove('isLoggedIn')
    Cookies.remove('name')
    Cookies.remove('lastName')
    Cookies.remove('email')
    Cookies.remove('role');

    router.push('/')
  }

  return (
    <header className='h-16 flex justify-between items-center sm:px-6'>
      <section>
        <Link href='/'>
          <h1>Liga de tenis NJS</h1>
        </Link>
      </section>
      <section className='flex justify-evenly items-center w-60'>
        <Link href='/'>Inicio</Link>
        <Link href='/torneos'>Torneos</Link>
        {isExpired ?
          <Link href='/ingresa'>Ingresar</Link> :
          <button onClick={handleLogOut}>Salir</button>
        }
      </section>
    </header>
  )
}

export default Header