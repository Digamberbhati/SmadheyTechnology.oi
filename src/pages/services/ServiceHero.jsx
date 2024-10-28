import React from 'react'
import { Link } from 'react-router-dom'


const ServiceHero = ({cardData , heading, image}) => {
    console.log(image)
  return (
    <div className='bg-background-600 min-h-screen ' >    
    <div 
    style={{ backgroundImage: `url(${image})` }}
    className='flex  justify-start items-center h-screen w-full bg-cover bg-center text-white relative px-10 '
    >
      <div className=' z-20 w-full mx-auto  flex flex-col'>
      <h1 className='text-[6vw] block  font-bold  leading-[1.1] pb-10 max-w-screen-xl'>{heading}</h1>
      <Link to="/contact" className='border px-4 py-3 sm:w-[10%] hover:bg-purple-700 duration-300 '> Connect Now </Link>
      </div>
      <div className='absolute inset-0 h-full w-full bg-gradient-to-t from-purple-600 '>


      </div>
        
      
    </div>

    <div className='flex-card  max-w-screen-xl mx-auto py-10'>
            <div className="  flex justify-between gap-4 flex-wrap">
                {cardData.map((card) => (
                    <div key={card.id} className="flex items-start bg-background-800 p-4 rounded-lg  transition-all duration-300 ease-in-out w-[32%] min-h-52 hover:scale-[1.1] ">
                        
                        <div className="flex flex-col gap-10 h-full">
                            <h3 className="sm:text-[1.5vw] text-[2vh] font-semibold text-white">{card.title}</h3>
                            <p className="mt-1 sm:text-[1vw] text-[1.5vh] text-gray-300">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
    </div>

  )
}

export default ServiceHero
