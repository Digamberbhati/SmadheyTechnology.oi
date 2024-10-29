import React from 'react'

function Servicebanner({ heading, description, img }) {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-12 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h1 className="text-gray-900 text-3xl title-font  mb-4 font-bold">{heading}</h1>
              <p className="leading-relaxed mb-4 text-[2.2vh] md:text-[2.5vh] ">{description}</p>
            </div>
            <img alt="service" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={img}/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Servicebanner
