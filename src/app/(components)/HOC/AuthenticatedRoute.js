'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

const authenticatedRoute = (Component = null, options = {}) => {
  const AuthenticatedRoute = (props) => {
    const router = useRouter()
    const isLogged = Cookies.get('isLoggedIn') === 'true'
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      if (isLogged) {
        setLoading(false)
      } else {
        router.replace(options.pathAfterFailure || '/')
      }
    }, [isLogged, router])

    if (loading) {
      return (
        <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
          <div className="wheel"></div>
          <div className="hamster">
            <div className="hamster__body">
              <div className="hamster__head">
                <div className="hamster__ear"></div>
                <div className="hamster__eye"></div>
                <div className="hamster__nose"></div>
              </div>
              <div className="hamster__limb hamster__limb--fr"></div>
              <div className="hamster__limb hamster__limb--fl"></div>
              <div className="hamster__limb hamster__limb--br"></div>
              <div className="hamster__limb hamster__limb--bl"></div>
              <div className="hamster__tail"></div>
            </div>
          </div>
          <div className="spoke"></div>
        </div>
      )
    }

    return <Component {...props} />
  }

  return AuthenticatedRoute
}
export default authenticatedRoute