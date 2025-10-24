'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeSinceWedding, setTimeSinceWedding] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2025-09-04T00:00:00').getTime();
    
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = now - weddingDate;
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeSinceWedding({ days, hours, minutes, seconds });
    };
    
    // Update immediately
    updateTimer();
    
    // Then update every second
    const timer = setInterval(updateTimer, 1000);
    
    // Clean up interval on component unmount
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="w-full h-fit bg-nepaliredsecond flex flex-col md:flex-row px-10 md:px-0 items-center md:items-stretch">
      <div className="py-20 md:py-36 flex flex-col justify-center items-center md:items-start lg:pl-[20%] md:pr-8 w-full md:w-auto">
        <div className="md:max-w-2xl w-full">
          <h2 className="text-6xl font-normal tracking-widest text-white font-['Cormorant_Garamond'] -mb-2.5 text-center md:text-left">
            WE ARE
          </h2>
          <p className="text-6xl text-white font-['Fleur_De_Leah'] mb-8 text-center md:text-left">
            married!
          </p>
          <p className="text-base text-white mb-7 md:mb-20 leading-relaxed text-center md:text-left">
            We are so grateful to have celebrated our special day with you.
            Here's how long we've been happily married:
          </p>
          
          <div className="mt-8 mb-12 flex justify-center md:justify-start">
            <div className="bg-white/80 px-4 py-4 rounded-lg text-center min-w-[80px] mx-1">
              <div className="text-4xl font-bold text-[#8B0000]">{timeSinceWedding.days}</div>
              <div className="text-xs font-normal tracking-wider uppercase text-[#8B0000]">Days</div>
            </div>
            <div className="bg-white/80 px-4 py-4 rounded-lg text-center min-w-[80px] mx-1">
              <div className="text-4xl font-bold text-[#8B0000]">{timeSinceWedding.hours}</div>
              <div className="text-xs font-normal tracking-wider uppercase text-[#8B0000]">Hours</div>
            </div>
            <div className="bg-white/80 px-4 py-4 rounded-lg text-center min-w-[80px] mx-1">
              <div className="text-4xl font-bold text-[#8B0000]">{timeSinceWedding.minutes}</div>
              <div className="text-xs font-normal tracking-wider uppercase text-[#8B0000]">Mins</div>
            </div>
            <div className="bg-white/80 px-4 py-4 rounded-lg text-center min-w-[80px] mx-1">
              <div className="text-4xl font-bold text-[#8B0000]">{timeSinceWedding.seconds}</div>
              <div className="text-xs font-normal tracking-wider uppercase text-[#8B0000]">Secs</div>
            </div>
          </div>

          <div className="mt-auto flex flex-col items-center md:items-start">
            <div className="md:pl-0">
              <p className="text-sm font-light text-white text-center md:text-left mb-2">
                from yours,
              </p>
              <p className="text-5xl text-white font-['Fleur_De_Leah'] text-center mb-4">
                Nirmal & Sujana
              </p>
            </div>
            
            <div className="md:hidden">
              <Image
                src="/images/nepali/flowersgroup.svg"
                alt="Flowers"
                width={160}
                height={208}
                className="w-40 h-52 object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden md:flex items-center">
        <Image
          src="/images/nepali/flowersgroup.svg"
          alt="Flowers"
          width={400}
          height={600}
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Countdown;