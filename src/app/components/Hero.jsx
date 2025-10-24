import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="bg-nepaliredsecond p-3 lg:p-5 ">
      <div className="relative h-[90vh] bg-weddingbg">
        <div className="absolute left-4 top-4 w-32 h-32 md:w-48 md:h-48">
          <Image 
            src="/images/nepali/topl.svg" 
            alt="Decorative element"
            width={192}
            height={192}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute right-4 top-4 rotate-90 w-32 h-32 md:w-48 md:h-48">
          <Image 
            src="/images/nepali/topl.svg" 
            alt="Decorative element"
            width={192}
            height={192}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute bottom-4 left-4 w-32 h-32 -rotate-90 md:w-48 md:h-48">
          <Image 
            src="/images/nepali/topl.svg" 
            alt="Decorative element"
            width={192}
            height={192}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute bottom-4 right-4 rotate-180 w-32 h-32 md:w-48 md:h-48">
          <Image 
            src="/images/nepali/topl.svg" 
            alt="Decorative element"
            width={192}
            height={192}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-nepaliredsecond text-6xl font-['Cormorant_Garamond'] font-normal -mb-2.5">SUJANA</p>
          <p className="text-nepaliredsecond text-5xl italic font-['Fleur_De_Leah'] -mb-2.5">and</p>
          <p className="text-nepaliredsecond text-6xl font-['Cormorant_Garamond'] font-normal mb-20">NIRMAL</p>
          <p className="text-nepaliredsecond text-5xl italic font-['Fleur_De_Leah'] font-normal">got married</p>
        </div>

        <div className="absolute bottom-16 lg:bottom-4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-nepaliredsecond text-sm lg:text-xl font-light">19 • 05 • 2082</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;