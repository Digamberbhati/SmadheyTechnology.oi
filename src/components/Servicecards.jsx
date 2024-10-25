import React from 'react'
import { Link } from 'react-router-dom';
import { TbMathGreater } from "react-icons/tb";
import servicesData from '../utils/ServiceData.json'

const Servicecards = () => {
  return (
    <div className='max-w-screen-lg mx-auto h-[100vh] text-white  '>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
        {servicesData.map((service) => (
          <div key={service.id} className="flex flex-col justify-center items-center bg-gradient-to-br from-purple-800 via-purple-700 to-purple-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={service.image} alt={service.title} className="w-24 h-24 mb-4" />
            <h3 className="text-xl md:text-2xl text-center font-bold mb-2">{service.title}</h3>
            <p className="text-sm md:text-base text-gray-200 mb-4 text-center">{service.description}</p>
            <Link to={`/`} className="flex items-center gap-2 transition-colors duration-300">
              LEARN MORE <span className='bg-purple-600 rounded-full flex items-center justify-center h-6 w-6'><TbMathGreater className='text-xs' /></span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Servicecards
