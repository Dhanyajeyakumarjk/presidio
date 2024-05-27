import React from 'react';
import Card from '../Components/Card';


const cardData = [
  {
    image:"home1.jpg",
    title: '3 BH,Nagercoil,kanniyakumari',
    price: '50k',
    buttonText: "I'm Interested",
  },
  {
    image:"home2.jpg",
    title:'2 BH,Kitchen,Madipakkam,Chennai',
    price: '80k',
    buttonText: "I'm Interested",
  },
  {
    image:"home3.jpg",
    title: '3 BH,Modern Rooms,Nagercoil',
    price: '95k',
    buttonText: "I'm Interested",
  },
  {
    image:"home4.png",
    title: '4BH,kottaram,kanniyakumari',
    price: '20k',
    buttonText: "I'm Interested",
  },
];

export default function Buyer() {
  return (
    <>
    <div className="w-full h-[10vh] bg-slate-400">
        
  <div className='text-6xl font-serif text-red-200 text-center'>Buyer</div>
    </div>
    <div className="min-h-screen bg-gray-100 flex justify-center items-center buyer">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}

            title={card.title}
            price={card.price}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </div>
    </>
  );
}