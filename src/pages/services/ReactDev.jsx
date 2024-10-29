import React from 'react'
import ServiceHero from './ServiceHero'
import { GiCarDoor } from 'react-icons/gi'
import Servicebanner from '../../components/Servicebanner'

const ReactDev = () => {
  const cardData = [{
    id: 1,
    icon: <GiCarDoor />,
    title: 'React Development',
    description: 'Develop responsive and interactive web applications using React.js.'
  },
  {
    id: 2,
    icon: <GiCarDoor />,
    title: 'React Native Development',
    description: 'Create native mobile applications using React Native.'
  },
  {
    id: 3,
    icon: <GiCarDoor />,
    title: 'React Hooks',
    description: 'Learn and use the new features introduced in React Hooks, such as useState, useEffect, and useContext.'
  }
]

const image = "https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe"
  return (
    <div className='w-full '>
      <ServiceHero cardData={cardData} heading={"React Development"} image={image} />
      <Servicebanner heading={"React Development"} description={"Build modern, interactive web applications with React.js - a powerful JavaScript library for creating dynamic user interfaces. Our expert React developers leverage component-based architecture, virtual DOM, and the latest features like Hooks to deliver high-performance, scalable frontend solutions."} img={image}/>
    </div>
  )
}

export default ReactDev
