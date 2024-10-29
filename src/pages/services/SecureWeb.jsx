import React from 'react'
import ServiceHero from './ServiceHero'
import Servicebanner from '../../components/Servicebanner'

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
      <Servicebanner heading={"Secure Web Development"} description={"Protect your online presence with our comprehensive web security solutions. We implement robust security measures, encryption protocols, and best practices to safeguard your website from cyber threats, ensure data privacy, and maintain compliance with security regulations."} img={"/images/hero.jpg"}/>
    </div>
  )
}

export default SecureWeb
