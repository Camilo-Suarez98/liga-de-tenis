
import React, { useEffect, useState } from 'react'
import { redirect } from 'next/navigation'
import Cookies from 'js-cookie'

const authenticatedRoute = (Component = null, options = {}) => {

  const AuthenticatedRoute = (props) => {
    const [loading, setLoading] = useState(true)
    const isAdmin = Cookies.get('role') === 'true';
    // const router = useRouter()

    useEffect(() => {
      if (isAdmin) {
        setLoading(false)
      } else {
        redirect(options.pathAfterFailure || '/')
      }
    }, [isAdmin])

    if (loading) {
      return <div>Loading... </div>
    }

    return <Component {...props} />
  }

  return AuthenticatedRoute
}

export default authenticatedRoute