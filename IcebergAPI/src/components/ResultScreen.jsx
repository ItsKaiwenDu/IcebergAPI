import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import icon from '../assets/icon.png';
import pb from '../pb';

function ResultScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get('query');

  

  return (
    <div className="bg-dots text-white min-h-screen w-full flex flex-col items-center py-10">
      {/* Top Dock */}
      <div className="top-dock w-full h-20 fixed top-0 left-0 flex items-center justify-center px-8">
        {/* Logo */}
        <img
          src={icon}
          alt="Logo"
          className="absolute left-5 w-12 h-12 rounded"
        />

        {/* Brand Name */}
        <h1 className="text-2xl font-bold">
          <span className="text-white">Iceberg</span>
          <span className="text-[#54CEFF]">API</span>
        </h1>

        {/* Buttons Container */}
        <div className="absolute right-8 flex gap-6">
          <button
            className="text-white text-lg font-bold button-underline"
            onClick={() => navigate('/about')}
          >
            About
          </button>
          <button
            className="text-white text-lg font-bold button-underline"
            onClick={() => navigate('/')}
          >
            Home
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center mt-28">
        <h1 className="text-4xl font-bold mb-15">Found API Results</h1>
        <div className="flex flex-col gap-12 w-[60rem]">
          {/* Placeholder rectangles */}
          <div className="bg-[#c7dce4] h-20 rounded-lg shadow-md"></div>
          <div className="bg-[#c7dce4] h-20 rounded-lg shadow-md"></div>
          <div className="bg-[#c7dce4] h-20 rounded-lg shadow-md"></div>
        </div>
        <div className="flex flex-col gap-12 w-[60rem] mt-12">
          <div className="bg-[#c7dce4] h-20 rounded-lg shadow-md"></div>
          <div className="bg-[#c7dce4] h-20 rounded-lg shadow-md"></div>
        </div>
      </div>
    </div>
  );
}

export default ResultScreen;