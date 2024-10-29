import React from 'react'
import { Link } from 'react-router-dom'


const ServiceHero = ({cardData , heading, image}) => {
    console.log(image)
  return (
    <div className='bg-background-600 min-h-screen ' >    
    <div 
    style={{ backgroundImage: `url(${image})` }}
    className='flex  justify-start items-center sm:h-screen h-[60vh] w-full bg-cover bg-center text-white relative px-10 '
    >
      <div className=' z-20 w-full mx-auto  flex flex-col'>
      <h1 className='sm:text-[6vw] text-[5vh] block  font-bold  leading-[1.1] pb-10 max-w-screen-xl'>{heading}</h1>
      <Link to="/contact" className='border px-4 py-3 sm:w-[10%] w-1/2 hover:bg-purple-700 duration-300 '> Connect Now </Link>
      </div>
      <div className='absolute inset-0 h-full w-full bg-gradient-to-t from-purple-600 '>


      </div>
        
      
    </div>

    <div className='flex-card max-w-screen-xl mx-auto py-10 px-4'>
            <div className="flex flex-col sm:flex-row justify-between gap-6">
                {cardData.map((card) => (
                    <div key={card.id} className="flex items-start bg-background-800 p-6 rounded-lg transition-all duration-300 ease-in-out w-full sm:w-[32%] min-h-52 hover:scale-[1.02]">
                        
                        <div className="flex flex-col gap-6 h-full w-full">
                            <h3 className="text-xl sm:text-2xl font-semibold text-white">{card.title}</h3>
                            <p className="text-base sm:text-lg text-gray-300">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
    </div>
    </div>

  )
}

export default ServiceHero
