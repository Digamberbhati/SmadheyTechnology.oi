import React from 'react'
import Hero from '../components/Hero'
import Servicecards from '../components/Servicecards'
import HoverCards from '../components/HoverCards'

function Home() {
  return (
    <div className='w-full min-h-screen flex flex-col py-10 bg-purple-600 justify-center items-center'>
      <Hero />

      <section className='w-full min-h-screen bg-background-600 '>
      <HoverCards/>
      </section>









      {/* <section>
      <h1 className='text-[4vw] font-bold text-white  text-center pt-10'>Our Services</h1>
      <Servicecards/> 
      </section> */}
    </div>
  )
}

export default Home
