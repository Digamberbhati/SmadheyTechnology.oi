import React from 'react'
import ServiceHero from './ServiceHero'
import Servicebanner from '../../components/Servicebanner'

const Firebase = () => {
  const image = "https://coderealities.com/_next/image?url=http%3A%2F%2F127.0.0.1%3A3001%2Fpictures%2Ffirebase2-remote-config.png&w=1080&q=75"

  const cardData= [{
    id: 1,
    title: 'Firebase Realtime Database',
    description: 'Firebase Realtime Database is a fully managed NoSQL database for your app. It provides real-time data synchronization.',
  
  },{
    id: 2,
    title: 'Firebase Authentication',
    description: 'Firebase Authentication provides secure and reliable authentication for your app. It handles user sign-up, sign-in, and password management.',
  },{
    id: 3,
    title: 'Firebase Cloud Functions',
    description: 'Firebase Cloud Functions allows you to run your code in response to events or API calls. It provides serverless computing.',
  },

  ]
  return (
    <div className='w-full '>
      <ServiceHero cardData={cardData} image={image } heading={"FireBase Integration"}/>
      <Servicebanner heading={"Firebase Integration"} description={"Leverage Firebase's powerful suite of cloud services to build scalable applications. From real-time databases and authentication to cloud functions and hosting, our Firebase integration solutions provide the backend infrastructure you need for modern web and mobile applications."} img={image}/>
    </div>
  )
}

export default Firebase
