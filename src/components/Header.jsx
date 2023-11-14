'use client'
import Cookies from 'js-cookie';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useAuth } from '../utils/AuthContext';

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const router = useRouter()

  const handleLogOut = () => {
    Cookies.remove('token');
    Cookies.remove('name');
    Cookies.remove('lastName');
    Cookies.remove('email');
    Cookies.remove('role');
    Cookies.remove('isLoggedIn');

    setIsLoggedIn(false)
    router.push('/')
  }

  return (
    <header className='h-16 flex justify-between items-center sm:px-6'>
      <div>
        <Link href='/'>
          <h1>Liga de tenis NJS</h1>
        </Link>
      </div>
      <div className='flex justify-evenly items-center w-60 sm:w-80'>
        <Link className='hover:text-blue-500 hover:font-bold' href='/'>Inicio</Link>

        <Link className={'hover:text-blue-500 hover:font-bold'} href='/admin'>
          Administrador
        </Link>

        <Link
          className='hover:text-blue-500 hover:font-bold'
          href='/torneos'
        >
          Torneos
        </Link>

        <button className={!isLoggedIn ? 'hidden' : 'hover:text-blue-500 hover:font-bold'} onClick={handleLogOut}>
          Salir
        </button>

        <Link className={isLoggedIn ? 'hidden' : 'hover:text-blue-500 hover:font-bold'} href='/ingresa'>
          Ingresar
        </Link>
      </div>
    </header>
  )
}

export default Header