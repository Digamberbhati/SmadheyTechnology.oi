import React from 'react'
import Hero from '../components/Hero'
import Servicecards from '../components/Servicecards'
import HoverCards from '../components/HoverCards'
import AboutCardText from '../components/AboutCardText'

function Home() {
  return (
    <div className='w-full min-h-screen flex flex-col py-10 bg-purple-600 justify-center items-center'>
      <Hero />

      <section className='w-full sm:h-[70vh]  bg-background-600'>
        <HoverCards />
      </section>


      <section className='w-full min-h-screen bg-background-600 '>
            <h3 className='sm:text-[2vw] text-[2.4vh] font-bold text-white  text-center pt-10'>Full-scale protection from cyberthreats</h3>
            <p className='text-white text-center sm:w-2/5 w-full px-2 sm:px-0 mx-auto mt-4'>Comprehensive cybersecurity solutions safeguarding your digital assets. Stay protected against evolving threats with our advanced defense systems.</p>

            <AboutCardText/>
      </section>



      <div 
    style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.2), rgba(0, 01, 0, 0.4)), url(https://plus.unsplash.com/premium_photo-1663089895867-428d148a8663?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhhY2tlcnxlbnwwfDB8MHx8fDA%3D)`,
    }}
    className='flex flex-col justify-center items-center h-[50vh] w-full bg-cover bg-center text-background-200 relative mt-16'>
          <h1 className='sm:text-[4vw] text-[4vh] font-bold  text-center  z-20'>Your Online activity & privacy covered</h1>

          <p className=' text-center sm:w-2/5 w-full mx-auto mt-4'>Our comprehensive cybersecurity solutions are designed to protect your digital assets from evolving threats. </p>
      </div>





      <section>
      <h1 className='sm:text-[4vw] text-[4vh] font-bold text-white  text-center pt-10'>Our Services</h1>
      <Servicecards/> 
      </section>
    </div>
  )
}

export default Home
