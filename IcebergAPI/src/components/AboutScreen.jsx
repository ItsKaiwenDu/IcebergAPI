import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/HomeScreen.css';
import icon from '../assets/icon.png';

import KaiwenProfile from '../assets/KaiwenProfile.jpg';
import AbhinavProfile from '../assets/AbhinavProfile.jpg';
import ZachProfile from '../assets/ZachProfile.jpg';
import JackProfile from '../assets/JackProfile.jpg';

function AboutScreen() {
  const navigate = useNavigate();

  return (
    <div className="bg-dots text-white min-h-screen w-full flex flex-col items-center">
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
        <button
          className="absolute right-8 text-white text-lg font-bold hover:underline"
          onClick={() => navigate('/')}
        >
          Home
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-8 text-center">
        <h1 className="text-6xl font-bold drop-shadow-lg">
          <span className="text-white">About Iceberg</span>
          <span className="text-[#54CEFF]">API</span>
        </h1>
        <p className="text-2xl mt-6 drop-shadow-lg max-w-4xl">
          IcebergAPI allows developers to easily discover and integrate API into their applications. For example,
          if a user wants to create a project which may require multiple APIs but user doesn't know which one to
          use and which one is easy to maintain, our application uses AI natural processing language to translate
          user thoughts, then sends simplified information into API database scraper to find the most suitable APIs
          for user to use.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="w-full px-8 -mt-16">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {/* Question 1 */}
          <div>
            <h3 className="text-2xl font-semibold">How do I get started with IcebergAPI?</h3>
            <p className="text-lg mt-2">
              To get started, simply navigate to the homepage and enter a brief description of your project or the type of API you need. IcebergAPI will analyze your input and recommend the most suitable APIs.
            </p>
          </div>

          {/* Question 2 */}
          <div>
            <h3 className="text-2xl font-semibold">What should I put in the input box?</h3>
            <p className="text-lg mt-2">
              You can describe your project requirements or the functionality you are looking for. For example, "I need an API for weather data" or "I want to integrate payment processing into my app."
            </p>
          </div>

          {/* Question 3 */}
          <div>
            <h3 className="text-2xl font-semibold">Can I customize the API recommendations?</h3>
            <p className="text-lg mt-2">
              Yes, you can refine your search by providing more specific details or adjusting the filters available on the results page.
            </p>
          </div>
        </div>
      </div>

      {/* Meet the Developers Section */}
      <div className="w-full px-8 mt-16">
        <h2 className="text-4xl font-bold text-center mb-12">Meet the Developers</h2>
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {/* Developer Card 1 */}
          <div className="bg-[#f5f5f5] text-gray-800 rounded-lg shadow-lg p-6 w-80 flex flex-col items-center">
            <h3 className="text-2xl font-bold">Kaiwen Du</h3>
            <p className="text-lg font-semibold mt-2">
              Role: Frontend Developer
            </p>
            <p className="text-sm mt-2 text-center">
              Description: Currently a Freshman student majoring in Computer Science at Santa Clara University.
            </p>
            <div className="w-48 rounded-lg overflow-hidden mt-4">
              <img
                src={KaiwenProfile}
                alt="Kaiwen Du"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Developer Card 2 */}
          <div className="bg-[#f5f5f5] text-gray-800 rounded-lg shadow-lg p-6 w-80 flex flex-col items-center">
            <h3 className="text-2xl font-bold">Zach Peng</h3>
            <p className="text-lg font-semibold mt-2">
              Role: Backend Developer
            </p>
            <p className="text-sm mt-2 text-center">
              Description: Currently a Sophomore student majoring in Computer Science at Santa Clara University.
            </p>
            <div className="w-48 rounded-lg overflow-hidden mt-4">
              <img
                src={ZachProfile}
                alt="Zach Peng"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Developer Card 3 */}
          <div className="bg-[#f5f5f5] text-gray-800 rounded-lg shadow-lg p-6 w-80 flex flex-col items-center">
            <h3 className="text-2xl font-bold">Jack Murrow</h3>
            <p className="text-lg font-semibold mt-2">
              Role: Fullstack Developer
            </p>
            <p className="text-sm mt-2 text-center">
              Description: Currently a Freshman student majoring in Computer Science & Engineering at Santa Clara University.
            </p>
            <div className="w-48 rounded-lg overflow-hidden mt-4">
              <img
                src={JackProfile}
                alt="Jack Murrow"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Developer Card 4 */}
          <div className="bg-[#f5f5f5] text-gray-800 rounded-lg shadow-lg p-6 w-80 flex flex-col items-center">
            <h3 className="text-2xl font-bold">Abhinav Pala</h3>
            <p className="text-lg font-semibold mt-2">
              Role: Backend Developer
            </p>
            <p className="text-sm mt-2 text-center">
              Description: Currently a Freshman student majoring in Computer Science at Santa Clara University.
            </p>
            <div className="w-48 rounded-lg overflow-hidden mt-4">
              <img
                src={AbhinavProfile}
                alt="Abhinav Pala"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutScreen;