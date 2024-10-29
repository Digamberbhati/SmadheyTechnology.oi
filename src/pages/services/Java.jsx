import React from 'react'
import ServiceHero from './ServiceHero'
import Servicebanner from '../../components/Servicebanner'

const Java = () => {
  const image = "https://miro.medium.com/v2/resize:fit:700/0*gtY-llyEbkeoS1Sp.png"
  const cardData =[
    {
      id: 1,
      title: "Scalable and Maintainable",
      description: "Java is a popular choice for building scalable and maintainable applications. With its robust features, you can easily scale your applications and avoid common pitfalls."
    },
    {
      id: 2,
      title: "Concurrency and Parallelism",
      description: "Java provides a rich set of tools for handling concurrency and parallelism, allowing you to build highly efficient and responsive applications."
    },
    {
      id:3,
      title: "Enterprise-Grade Features",
      description: "Java has a rich ecosystem of libraries and frameworks, including Spring Boot, Hibernate, and Apache Kafka, that make it easy to build enterprise-grade applications."
    }
  ]
  return (
    <div className='w-full'>
      <ServiceHero cardData={cardData} heading={"Java Development"} image={image}/>
      <Servicebanner heading={"Java Development"} description={"Leverage Java's robust ecosystem and enterprise-grade features to build scalable, maintainable applications. Our expert Java developers utilize frameworks like Spring Boot and tools for concurrency to deliver high-performance, reliable solutions that meet your business needs."} img={image}/>
    </div>
  )
}

export default Java
