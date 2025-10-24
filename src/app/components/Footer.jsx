import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="flex flex-col text-center bg-nepaliredsecond text-neutral-50 py-10">
      <div className="font-['Quintessential']">
        <h1 className="text-4xl md:text-5xl">
          <span className="text-4xl md:text-5xl">S</span>&<span className="text-4xl md:text-5xl">N</span>
        </h1>
      </div>

      <p className="text-xs md:text-lg font-medium font-['Geist'] text-neutral-50">
        19 • 05 • 2082
      </p>
      
      <div className="flex items-center justify-center md:my-4">
        <Image 
          src="/images/nepali/footer.svg" 
          alt="leaves" 
          width={144}
          height={96}
          className="mr-2"
        />
      </div>
      
      <div className="mt-10 text-sm text-neutral-50">
        {/* <p className="font-['Geist'] text-neutral-50 text-xs md:text-base">
          with <span className="text-pink-500">💞</span>, emantara
        </p> */}
        <div className="flex items-center justify-center mt-2" style={{ fontFamily: "'Geist', serif" }}>
          <p
            href="#" 
            className="text-neutral-50 underline hover:text-gray-800 text-xs md:text-[16px] font-['Geist']"
          >
            Made With Love
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;