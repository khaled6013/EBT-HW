import React from 'react'
import Img from '../assets/serve.jpg'

const Banner = () => {
  return (
    <>
       <section className='py-20'>
        <div className="w-10/12 mx-auto">
           <div className="bg-gray-500 rounded-lg p-10">
             <img src={Img} alt="" className='w-75'/>
           </div>
        </div>
       </section>
    </>
  )
}

export default Banner