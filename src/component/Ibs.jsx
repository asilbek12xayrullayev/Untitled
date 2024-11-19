import React from "react";

const AboutIBS = () => {
  // Rasmlarni fayldan yuklash
  const images = [
    require("../assats/aziza.jpg.png"), // Fayl joylashuvi
    require("../assats/sarvar.jpg.png"), // Fayl joylashuvi
    require("../assats/asal.jpg.png"), // Fayl joylashuvi
    require("../assats/komil.jpg.png"), // Fayl joylashuvi
  ];

  return (
    <div className="w-full py-10 px-4 bg-gray-50">
      <div className="max-w-9xl mx-auto ">
        {/* Sarlavha va matn */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 px-10">
          O IBS
        </h2>
        <p className="text-gray-600 text-lg mb-8 px-10">
          Skillbox №1 в странах СНГ. На платформе вы сможете получить актуальные
          знания и освоить востребованную профессию из любой точки мира.
        </p>

        {/* Rasmlar uchun grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={image}
                alt={`Person ${index + 1}`}
                className="rounded-lg shadow-lg object-cover w-72 h-96 md:w-80 md:h-[30rem]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutIBS;
