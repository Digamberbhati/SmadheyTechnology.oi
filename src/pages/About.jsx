import React from 'react'
import about from '/images/hero.jpg'
import AboutCardText from '../components/AboutCardText'
function About() {
  return (
    <div className='w-full min-h-screen bg-background-600 py-10'>
    <div 
    style={{
        backgroundImage: `url(${about})`,
    }}
    className='flex justify-center items-center sm:h-[50vh] h-[20vh] w-full bg-cover bg-center text-white relative'>
      <h1 className='sm:text-[4vw] text-[6vh] font-bold z-20'  >About.</h1>
      <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-purple-600 "></div>
    </div>

    <AboutCardText/>
    </div>
  )
}

export default About
