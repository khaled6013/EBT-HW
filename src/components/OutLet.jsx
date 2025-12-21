import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const OutLet = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  )
}

export default OutLet