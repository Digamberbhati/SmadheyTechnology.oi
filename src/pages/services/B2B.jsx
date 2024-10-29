import React from 'react'
import ServiceHero from './ServiceHero'
import Servicebanner from '../../components/Servicebanner'

const B2B = () => {
  const cardData = [{
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
]

const image = "https://blog-assets.freshworks.com/freshdesk/wp-content/uploads/2019/09/06114820/B2B-Cover-design.jpg"
  return (
    <div className='w-full '>
    <ServiceHero cardData={cardData} heading={"Business - to- Business Collabration"} image={image}/>
    <Servicebanner heading={"B2B Solutions"} description={"Streamline your business partnerships with our comprehensive B2B solutions. We facilitate seamless collaboration, enhance supply chain efficiency, and create strategic opportunities for sustainable growth and market expansion."} img={image}/>
  </div>
  )
}

export default B2B
