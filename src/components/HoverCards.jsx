import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const cardData = [
  {
    id: 1,
    title: "Protect Your Privacy",
    image: "/svg/world.svg",
    description: "Safeguard your digital footprint with our cutting-edge privacy solutions. Stay one step ahead of cyber threats and enjoy peace of mind in the online world."
  },
  {
    id: 2,
    title: "Real Time Protection",
    image: "/svg/wifi.svg",
    description: "Experience unparalleled security with our real-time protection system. Detect and neutralize threats instantly, keeping your data safe around the clock."
  },
  {
    id: 3,
    title: "Secure Your Identity",
    image: "/svg/pep.svg",
    description: "Take control of your digital identity with our advanced security measures. Prevent identity theft and unauthorized access to your personal information."
  }
];

const HoverCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (

    <div className='max-w-screen-lg  sm:h-[70vh]   mx-auto sm:relative  '>
      <div className='w-full h-full sm:absolute sm:top-[-20%] top-0 rounded-lg sm:px-0 px-4'>
        <div className="flex flex-col sm:flex-row justify-around items-center h-full">
          {cardData.map((card) => (
            <div 
              key={card.id} 
              className={`w-full sm:w-1/3 h-full bg-background-500 rounded-lg shadow-lg transition-all duration-300 flex flex-col justify-start items-center p-6 pt-10 group mb-8 sm:mb-0
                ${card.id === 2 ? 'sm:scale-[105%]' : ''}
                ${hoveredCard === card.id ? 'sm:scale-[115%] bg-gradient-to-br from-background-400 to-background-600 z-10' : ''}
                ${hoveredCard && hoveredCard !== card.id ? 'sm:scale-[95%]' : ''}
              `}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img src={card.image} alt={card.title} className='w-16 h-16 sm:w-24 sm:h-24' />
              <h2 className="text-2xl sm:text-[3vw] leading-[1.2] sm:leading-[1] text-wrap text-center pt-4 sm:pt-6 font-bold text-text mb-4">{card.title}</h2>
              <p className="text-text text-center text-sm sm:text-base">{card.description}</p>
              <Link to="/" className='text-text px-4 sm:px-6 py-2 sm:py-3 border mt-4 text-sm sm:text-base group-hover:text-background-600 group-hover:bg-white transition-colors duration-300'>
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default HoverCards
