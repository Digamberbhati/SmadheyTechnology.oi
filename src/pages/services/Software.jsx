import React from 'react'
import ServiceHero from './ServiceHero'

const Software = () => {

  const image = "https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-b7b1dec/www.aalpha.net/wp-content/uploads/2020/09/software-architecture-consulting-india.jpg"

  const cardData=[
    {
      id: 1,
      title: "Software Architecture Consulting",
      image: "d",
      description: "Our experienced software architects will help you design, build, and maintain scalable, secure, and maintainable software solutions. We offer expertise in various programming languages, including Java, C#, and Python."
      },
      {
        id: 2,
        title: "Software Development",
        image: "d",
        description: "We develop custom software solutions, integrating various technologies and services to meet your specific needs. Our team of experienced developers will help you build robust and efficient applications, websites, and software systems."
      },
      {
        id: 3,
        title: "Software Testing",
        image: "d",
        description: "We perform comprehensive testing and QA for your software solutions, ensuring that they meet your business requirements and deliver high-quality results. Our team of experienced testers will help you identify and fix bugs, optimize performance, and ensure the reliability of your software."
      }
  ]
  return (
    <div className='w-full '>
      <ServiceHero cardData={cardData} heading={"Software Architechure"} image={image}/>
    </div>
  )
}

export default Software
