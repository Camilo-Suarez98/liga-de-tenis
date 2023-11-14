'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/(utils)/AuthContext'
import Loader from '../Loader'

const authenticatedRoute = (Component = null, options = {}) => {
  const AuthenticatedRoute = (props) => {
    const router = useRouter()
    const { isLoggedIn } = useAuth()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      if (isLoggedIn) {
        setLoading(false)
      } else {
        router.replace(options.pathAfterFailure || '/')
      }
    }, [isLoggedIn, router])

    if (loading) {
      return <Loader />
    }

    return <Component {...props} />
  }

  return AuthenticatedRoute
}
export default authenticatedRoute