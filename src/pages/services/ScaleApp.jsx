import React from 'react'
import ServiceHero from './ServiceHero'

const ScaleApp = () => {
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
        image: "/svg/shield.svg",
        description: "Stay informed about real-time threats and protect your business from cyber attacks. Protect yourself and your customers."
    },
    {
        id: 3,
        title: "Advanced Analytics",
        image: "/svg/analytics.svg",
        description: "Get insights into your business's performance and make data-driven decisions. Monitor and optimize your operations."
    },
]

const heading = "Scale Application small To Enterprise Level"

const image = "https://plus.unsplash.com/premium_photo-1661658740167-45b56833412b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <div className='w-full min-h-screen '>
    <ServiceHero cardData={cardData} heading={heading} image={image}/>
    </div>
  )
}

export default ScaleApp
