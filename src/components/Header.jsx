'use client'
import Cookies from 'js-cookie';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useAuth } from '../utils/AuthContext';

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const router = useRouter()
  const isAdmin = Cookies.get('role') === 'true'
  const logeed = Cookies.get('isLoggedIn')

  const handleLogOut = () => {
    Cookies.remove('token')
    Cookies.remove('name')
    Cookies.remove('lastName')
    Cookies.remove('email')
    Cookies.remove('role');

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
        <Link
          className='hover:text-blue-500 hover:font-bold'
          href='/torneos'
        >
          Torneos
        </Link>

        {isAdmin && logeed &&
          <Link className='hover:text-blue-500 hover:font-bold' href='/admin'>
            Administrador
          </Link>
        }

        {!isLoggedIn ?
          <Link className='hover:text-blue-500 hover:font-bold' href='/ingresa'>
            Ingresar
          </Link> :
          <button className='hover:text-blue-500 hover:font-bold' onClick={handleLogOut}>
            Salir
          </button>
        }
      </div>
    </header>
  )
}

export default Header