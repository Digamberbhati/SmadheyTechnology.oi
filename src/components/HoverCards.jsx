import React from 'react'

const cardData = [
  {
    id: 1,
    title: "Card 1",
    description: "Description for Card 1"
  },
  {
    id: 2,
    title: "Card 2",
    description: "Description for Card 2"
  },
  {
    id: 3,
    title: "Card 3",
    description: "Description for Card 3"
  }
];

const HoverCards = () => {
  return (
    <div className='max-w-screen-lg h-[70vh]  mx-auto relative '>
        <div className='w-full h-full  absolute top-[-20%]  rounded-lg'>
            <div className="flex justify-around items-center h-full">
                {cardData.map((card) => (
                    <div key={card.id} className="w-1/3 h-full bg-background-500 rounded-lg shadow-lg hover:scale-[110%] hover:bg-gradient-to-br hover:from-background-400 hover:to-background-600 transition-all duration-300 flex flex-col justify-center items-center  p-6">
                        <h2 className="text-2xl font-bold text-text mb-4">{card.title}</h2>
                        <p className="text-text text-center">{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default HoverCards
