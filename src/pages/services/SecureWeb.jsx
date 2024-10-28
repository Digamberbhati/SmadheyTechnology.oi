import React from 'react'
import ServiceHero from './ServiceHero'

const SecureWeb = () => {
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
    description: "Protect your sensitive data and assets from unauthorized access."
  },
  {
    id: 3,
    title: "Data Protection",
    image: "/svg/shield.svg",
    description: "Stay informed about data protection regulations and best practices."
  },

]

  return (
    <div className='w-full min-h-screen '>
      <ServiceHero cardData={cardData} heading={"Secure Websites"} image= "/images/hero.jpg"  />
    </div>
  )
}

export default SecureWeb
