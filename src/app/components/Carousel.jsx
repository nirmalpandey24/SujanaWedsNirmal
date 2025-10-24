"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Carousel = () => {
  // Three separate arrays of images for each carousel
  const carousels = [
    [
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=400&h=400',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&h=400',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400',
    ],
    [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=400',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&h=400',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&h=400',
    ],
    [
      'https://images.unsplash.com/photo-1519085360759-3247117f0f78?q=80&w=400&h=400',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=400',
      'https://images.unsplash.com/photo-1517841905801-f9d3c0bb4a24?q=80&w=400&h=400',
    ]
  ];

  // State to track current image index for each carousel
  const [currentIndices, setCurrentIndices] = useState(carousels.map(() => 0));

  const goToNext = (carouselIndex) => {
    setCurrentIndices(prev => {
      const newIndices = [...prev];
      newIndices[carouselIndex] = (newIndices[carouselIndex] + 1) % carousels[carouselIndex].length;
      return newIndices;
    });
  };

  const goToPrev = (carouselIndex) => {
    setCurrentIndices(prev => {
      const newIndices = [...prev];
      newIndices[carouselIndex] = 
        (newIndices[carouselIndex] - 1 + carousels[carouselIndex].length) % carousels[carouselIndex].length;
      return newIndices;
    });
  };

  return (
    <div className="w-full px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {carousels.map((images, carouselIndex) => (
          <div key={carouselIndex} className="relative w-full aspect-square">
            {/* Current Image */}
            <div className="w-full h-full overflow-hidden rounded-lg">
              <img
                src={images[currentIndices[carouselIndex]]}
                alt={`Carousel ${carouselIndex + 1} - Image ${currentIndices[carouselIndex] + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Navigation Buttons - Always Visible */}
            <div className="absolute inset-0 flex items-center justify-between px-2">
              <Button
                variant="default"
                size="icon"
                className="h-8 w-8 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-md"
                onClick={() => goToPrev(carouselIndex)}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="default"
                size="icon"
                className="h-8 w-8 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-md"
                onClick={() => goToNext(carouselIndex)}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${index === currentIndices[carouselIndex] ? 'bg-white' : 'bg-white/50'}`}
                  onClick={() => {
                    const newIndices = [...currentIndices];
                    newIndices[carouselIndex] = index;
                    setCurrentIndices(newIndices);
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;