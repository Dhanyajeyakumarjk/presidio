import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate=useNavigate()
  return (
    <div className="flex flex-wrap   h-[10vh]">
   
        <nav className="flex items-center justify-evenly bg-sky-300 bg-opacity-15 text-slate-700 w-screen">
          <div className=" flex w-full items-center  ">
            <a className="text-3xl font-mono font-heading" href="#">
             
              Rentify
            </a>
            </div>

         
            <div className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">

              <span className="flex items-center hover:text-gray-200 "  onClick={()=>navigate("/")}>Login
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
           
              <span className="flex items-center w-36 hover:text-gray-200" onClick={()=>navigate("/signin")}>Sign up
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
           
          </div>
        </nav>
    
     

      </div>
    
  );
};

export default Header;
