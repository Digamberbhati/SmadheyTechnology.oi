import React from 'react'
import ServiceHero from './ServiceHero'
import Servicebanner from '../../components/Servicebanner'

const AI = () => {

const cardData = [
  {
  id: 1,
  title: "AI & Machine Learning",
  image: "/svg/ai.svg",
  description: "Our AI-driven solutions help businesses optimize their operations, reduce costs, and improve customer satisfaction."
 },{
  id: 2,
  title: "AI & Data Analysis",
  image: "/svg/ai.svg",
  description: "Our AI-driven solutions help businesses optimize their operations, reduce costs, and improve customer satisfaction."
 },
 {
  id: 3,
  title: "AI & Machine Learning",
  image: "/svg/ai.svg",
  description: "Our AI-driven solutions help businesses optimize their operations, reduce costs, and improve customer satisfaction."
 }

]


  const image = "https://cdn.prod.website-files.com/605c9e03d6553a5d82976ce2/66f1589475f66756d3f035c5_ai-data-analytics-scaled.webp"
  return (
    <div className='w-full '>
      <ServiceHero image = {image} cardData={cardData} heading={"Artificial Intelligence and Data Analysis"} />
      <Servicebanner heading={"AI + Data Analytics"} description={"Leverage the power of artificial intelligence and data analytics to gain actionable insights, automate processes, and make data-driven decisions that transform your business operations and drive innovation."} img={image}/>
    </div>
  )
}

export default AI
