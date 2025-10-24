'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function TemplateThreeSingleImage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sliderRef = useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  // Replace these with your actual image paths
  const images = [
    '/images/nepali/nirmal1.jpg',
    '/images/nepali/nirmal2.jpg',
    // '/images/nepali/nirmal3.jpg',
  ];

  // Auto-advance the slider
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        goToNext();
      }, 3000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Touch event handlers for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || touchEnd === null) return;
    
    const diff = touchStart - touchEnd;
    const swipeThreshold = 50; // Minimum distance to trigger slide change

    if (diff > swipeThreshold) {
      // Swipe left - go to next
      goToNext();
    } else if (diff < -swipeThreshold) {
      // Swipe right - go to previous
      goToPrev();
    }
    
    // Reset touch state and restart auto-play after a delay
    setTouchStart(null);
    setTouchEnd(null);
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 3000);
  };

  return (
    <div className="relative w-full lg:max-w-[50%] mx-auto bg-weddingbg">
      <div 
        ref={sliderRef}
        className="relative w-full max-w-[414px] h-[302px] md:max-w-none md:h-[432px] overflow-hidden shadow-md bg-gray-100 mx-auto"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((src, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt={`Carousel image ${index + 1}`}
              fill
              className="object-cover select-none"
              priority={index === 0}
              draggable={false}
            />
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              goToSlide(index);
              setTimeout(() => setIsAutoPlaying(true), 3000);
            }}
            className={`rounded-full transition-all ${
              index === currentIndex
                ? 'bg-[#CCCCCC] w-4 h-1.5 md:w-8 md:h-2.5'
                : 'w-1.5 h-1.5 md:w-2 md:h-2 bg-[#EEEDED]'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
