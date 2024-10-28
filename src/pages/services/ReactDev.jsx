import React from 'react'
import ServiceHero from './ServiceHero'
import { GiCarDoor } from 'react-icons/gi'

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
    </div>
  )
}

export default ReactDev
