import Link from 'next/link'
import React from 'react'
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header>
      <nav>
        <section>
          Liga de tenis // pendiente nombre
        </section>
        <section>
          <Link href='/'>Inicio</Link>
          <Link href='/torneos'>Torneos</Link>
          <UserButton afterSignOutUrl="/" />
        </section>
      </nav>
    </header>
  )
}

export default Header