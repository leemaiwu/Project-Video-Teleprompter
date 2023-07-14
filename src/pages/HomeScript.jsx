import React from 'react'
import { Outlet } from 'react-router-dom'
import Script from '../components/Script'

const HomeScript = () => {

  return (
    <div>
        <Script />
        <Outlet />
    </div>
  )
}

export default HomeScript
