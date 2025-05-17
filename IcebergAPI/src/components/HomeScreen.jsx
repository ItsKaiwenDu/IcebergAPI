import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/HomeScreen.css';
import icon from '../assets/icon.png';

function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="bg-dots text-white min-h-screen w-full flex flex-col items-center justify-center">
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

        {/* About Button */}
        <button
          className="absolute right-30 text-white text-lg font-bold hover:underline"
          onClick={() => navigate('/about')}
        >
          About
        </button>

        {/* Home Button */}
        <button className="absolute right-8 text-white text-lg font-bold hover:underline">Home</button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-8xl font-bold drop-shadow-lg">
          <span className="text-white">Welcome to Iceberg</span>
          <span className="text-[#54CEFF]">API</span>
        </h1>
        <p className="text-2xl mt-4 drop-shadow-lg">Where your idea gets unwrangled.</p>
        <input
          type="text"
          placeholder="What's on your mind today..."
          className="mt-12 px-8 py-4 rounded-[50px] shadow-xl text-gray-700 w-[50rem] bg-[#c7dce4]"
        />
      </div>
    </div>
  );
}

export default HomeScreen;