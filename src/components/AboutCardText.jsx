import React from 'react'

const cardData = [
  {
    id: 1,
    title: "Global Protection",
    image: "/svg/world.svg",
    description: "Secure your digital presence worldwide with our advanced cybersecurity measures."
  },
  {
    id: 2,
    title: "Network Security",
    image: "/svg/wifi.svg",
    description: "Protect your networks from unauthorized access and potential threats."
  },
  {
    id: 3,
    title: "Identity Protection",
    image: "/svg/pep.svg",
    description: "Safeguard your personal information and prevent identity theft."
  }
];

const AboutCardText = () => {
  return (
    <div className='w-full   mt-16'>
        <div className='max-w-screen-lg mx-auto h-[90vh]  flex gap-24 '>
            <div className="img w-1/2 h-full relative    ">
                <img src="https://images.unsplash.com/photo-1675434301703-6b7b9ca9f28d?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover rounded-lg  ' />

                <div className='absolute top-[-3%] right-[-3%] flex flex-col items-center justify-center bg-gradient-to-br from-background-400 to-background-700 rounded-lg p-4 '>
                    <h1 className='text-[4vw] font-bold text-white'>20+</h1>
                    <span className='text-[1vw] text-white'>Years of Experience</span>
                </div>
            </div>
            <div className="text w-1/2 h-full  pt-6 " >
            <div className='text-[3vw] font-bold text-white tracking-tight leading-[1]'>
            <h1>Maximum Protection</h1>
            <h1>for all your devices.</h1>
            </div>

            <p className='text-white text-lg mt-4 leading-[1.5] pt-4'>
            Our comprehensive cybersecurity solutions are designed to protect your digital assets from evolving threats. 
            </p>

            <div className='flex-card'>
            <div className="mt-8 space-y-6">
                {cardData.map((card) => (
                    <div key={card.id} className="flex items-start bg-background-700 p-4 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
                        <div className="flex-shrink-0 mr-4 ">
                            <img src={card.image} alt={card.title} className="w-12 h-12" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-[1.5vw] font-semibold text-white">{card.title}</h3>
                            <p className="mt-1 text-[1vw] text-gray-300">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default AboutCardText
