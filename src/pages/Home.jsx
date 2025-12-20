import React from 'react'
import Banner from '../components/Banner'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
     <Banner></Banner>
     <Outlet></Outlet>
    </>
  )
}

export default Home