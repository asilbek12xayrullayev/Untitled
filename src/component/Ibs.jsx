import React from 'react';
import profile1 from '../assats/aziza.jpg.png'; // Replace with actual paths to images
import profile2 from '../assats/sarvar.jpg.png';
import profile3 from '../assats/asal.jpg.png';
import profile4 from '../assats/komil.jpg.png';

const AboutIBS = () => {
  return (
    <div className="bg-white py-12 px-6">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">О IBS</h2>
        <p className="text-gray-700 mt-2">
          Skillbox <span className="font-semibold">№1</span> в странах СНГ. На платформе вы сможете получить актуальные знания и освоить востребованную профессию из любой точки мира.
        </p>
      </div>

      {/* Profile Images */}
      <div className="flex flex-wrap justify-center gap-4">
        <img
          src={profile1}
          alt="Profile 1"
          className="w-40 h-56 rounded-lg object-cover"
        />
        <img
          src={profile2}
          alt="Profile 2"
          className="w-40 h-56 rounded-lg object-cover"
        />
        <img
          src={profile3}
          alt="Profile 3"
          className="w-40 h-56 rounded-lg object-cover"
        />
        <img
          src={profile4}
          alt="Profile 4"
          className="w-40 h-56 rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default AboutIBS;
