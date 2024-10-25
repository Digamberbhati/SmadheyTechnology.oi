import React from 'react'
import services from '/images/services.jpg'
import Servicecards from '../components/Servicecards'
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
import { BsTwitterX } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Services = () => {
  return (
    <>
    <div 
    style={{
        backgroundImage: `url(${services})`,
    }}
    className='flex justify-center items-center sm:h-[50vh] h-[30vh] w-full bg-cover bg-center text-white relative'>
      <h1 className='sm:text-[4vw] text-[6vh] font-bold z-20'  >Services.</h1>
      <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-purple-600 "></div>
    </div>

    <section className="w-full min-h-screen bg-purple-600 pb-10  ">

        <section className='max-w-screen-lg mx-auto  py-4 text-white flex flex-col justify-center items-center'>
                {/* <h3 className='text-[2vw] font-bold text-center pb-4'>OUR SERVICES</h3> */}
                <h1 className='sm:text-[4vw] text-[4vh] font-bold text-center leading-none '>Expose Unknown Threats</h1>
                <h1 className='sm:text-[4vw] text-[4vh] font-bold text-center leading-none '>Become a Problem </h1>

                <p className='sm:text-[1.2vw] text-[1.5vh] sm:w-1/2 px-3 sm:px-0 leading-[1.5] sm:leading-[1.3vw] text-center pt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae error ratione molestias excepturi vitae quidem ab repellat ut culpa exercitationem.</p>
        </section>

        <Servicecards/>

        <section 
        style={{
          backgroundImage: `url(/images/hero.jpg)`,
        }}
        className='max-w-screen-lg mx-auto py-4 text-white mt-10 flex flex-col justify-center items-center rounded-lg h-[70vh] bg-cover bg-center relative overflow-hidden'>

          <div className='w-full h-full bg-purple-800 left-0 top-0 scale-125 opacity-40 '></div>

          <div className='w-full h-full absolute left-0 top-0'>
            <div className='w-full h-full flex sm:items-start items-center  justify-center flex-col sm:px-20 leading-none'>
            <h1 className='sm:text-[3vw] text-[4vh] font-bold opacity-90 text-center'>Why Not Check Out These Resources</h1>
            <h1 className='sm:text-[3vw] text-[4vh] font-bold opacity-90 text-center'>to Help You Security Solutions</h1>

            <p className='sm:pt-8 pt-4 sm:text-[1.2vw] text-[1.5vh] leading-[1.5] sm:leading-[1.2] opacity-60 w-3/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, voluptate cumque. Numquam molestias neque sit esse eaque totam cumque illo?</p>

            <div className='flex sm:w-1/5 sm:text-[2vw] gap-8 text-[3vh] items-center justify-between  mt-10 '>
            <Link className='hover:text-purple-500 duration-300' to="#"><RiInstagramFill /></Link>
            <Link className='hover:text-purple-500 duration-300' to="#"><IoLogoYoutube /></Link>
            <Link className='hover:text-purple-500 duration-300' to="#"><BsTwitterX /></Link>
            </div>
            </div>
          </div>
            
        </section>

    </section>
    </>
  )
}

export default Services
