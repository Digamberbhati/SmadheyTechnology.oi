import React from 'react'
import ServiceHero from './ServiceHero'

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
    </div>
  )
}

export default AI
