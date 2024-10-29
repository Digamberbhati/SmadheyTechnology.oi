import React from 'react'
import ServiceHero from './ServiceHero'
import Servicebanner from '../../components/Servicebanner'

const Angular = () => {
  const cardData = [
    {
      id: 1,
      title: "Angular",
      image: "/svg/angular.svg",
      description: "Angular is a TypeScript-based open-source front-end web framework developed by Google."
    },
    {
      id: 2,
      title: "Angular CLI",
      image: "/svg/angular-cli.svg",
      description: "Angular CLI is a command-line interface for Angular, the official development framework."
    },
    {
      id: 3,
      title: "Angular Material",
      image: "/svg/angular-material.svg",
      description: "Angular Material is a set of Angular components and tools that implement Google's Material Design."
    }
  ]

  const image = "https://external-preview.redd.it/qW5sXZSe_7w815bbdJh3mwhzBxyEdK13fFyRs3_8ZdQ.jpg?width=1080&crop=smart&auto=webp&s=b80a699978b4883b57f04855ad5be4cd26a917e8"
  return (
    <div className='w-full'>
      <ServiceHero cardData={cardData} heading={"Angular Development"} image={image} />
      <Servicebanner heading={"Angular Development"} description={"Angular is a powerful framework for building scalable web applications with TypeScript, offering robust features like dependency injection, routing, and component-based architecture."} img={image}/>
    </div>
  )
}

export default Angular
