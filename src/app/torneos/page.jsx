'use client'
import React from 'react'
import authenticatedRoute from '../(components)/HOC/AuthenticatedRoute'

const Tournament = () => {
  return (
    <div>Tournamet</div>
  )
}

export default authenticatedRoute(Tournament, { pathAfterFailure: '/' })