import React from 'react';

export default function Card({ image, title, price, buttonText }) {
  return (
    <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden m-4">
      <img className="w-full h-48 object-cover object-center" src={image} alt={title} />
      <div className="p-4">
        <h3 className="text-gray-900 font-semibold text-lg">{title}</h3>
        <div className="flex items-center justify-between mt-2">
          <div className="text-lg font-semibold">₹ {price}</div>
          <button className="bg-green-500 text-white py-1 px-4 rounded">{buttonText}</button>
        </div>
      </div>
    </div>
  );
}