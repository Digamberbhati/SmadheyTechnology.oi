import React from 'react'
import hero from '../../public/images/hero.jpg'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div
    style={{
      backgroundImage: `url(${hero})`,
    }}
    className='w-full h-screen bg-cover bg-center relative'
    >
      <div className='z-20 absolute inset-0 h-full max-w-screen-lg mx-auto text-white flex flex-col justify-center sm:items-start items-center sm:leading-[4.2vw] leading-[5vh] '>
        <h1 className='sm:text-[4vw] text-[5vh] font-bold'>Secure Your</h1>
        <h1 className='sm:text-[4vw] text-[5vh] font-bold'>cyberspace, secure</h1>
        <h1 className='sm:text-[4vw] text-[5vh] font-bold'>your digital life</h1>

        <p className='sm:text-[1.2vw] w-4/5 text-[1.7vh] text-center sm:text-start pt-6 sm:w-3/5 leading-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae error ratione molestias excepturi vitae quidem ab repellat ut culpa exercitationem.</p>

        <Link to="/services" className='bg-background-400 text-text px-6 py-2 h-12 flex items-center justify-c mt-6 hover:bg-background-500 transition-colors duration-300'>Get Started</Link>
      </div>
        
      <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-purple-600 opacity-70"></div>
      
    </div>
  )
}

export default Hero
