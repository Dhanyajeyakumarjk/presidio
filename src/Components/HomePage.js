import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate=useNavigate();
  return (
    <>
    
    <div className=" bg-gray-100 h-[600px] flex flex-col items-center justify-center buyer">
      <header className=" w-full py-6">
        <h1 className="text-center text-black text-4xl font-bold">Rentify</h1>
      </header>
      <main className="flex flex-col items-center mt-12 px-4">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Welcome to Rentify!</h2>
        <p className="text-black text-xl text-center max-w-xl mb-8">
          Rentify is your go-to platform for buying and selling properties online. Whether you're looking to find the perfect tenant for your property or searching for your dream home, Rentify makes the process easy and efficient.
        </p>
        <div className="flex space-x-4">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded " onClick={()=>navigate("/buyer")}>
            Buyer
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={()=>navigate("/seller")}>
            Seller
          </button>
        </div>
      </main>
    </div>
   
    </>
  );
};

export default HomePage;