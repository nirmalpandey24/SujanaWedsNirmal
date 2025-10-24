import Image from 'next/image';
import TemplateThreeSingleImage from './TemplateThreeSingleImage';

export default function Story() {
  return (
    <div className="bg-weddingbg py-20 px-10 lg:pt-0 relative">
      <div className="pb-10 mb:pb-0">
        <div className="absolute left-2 md:left-4 top-20 md:top-4 w-32 h-32 md:w-48 md:h-48">
          <Image 
            src="/images/nepali/topl.svg" 
            alt=""
            width={192}
            height={192}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute right-2 md:right-4 top-20 md:top-4 rotate-90 w-32 h-32 md:w-48 md:h-48">
          <Image 
            src="/images/nepali/topl.svg" 
            alt=""
            width={192}
            height={192}
            className="w-full h-full object-contain"
          />
        </div>

        {/* <div className="absolute bottom-2 md:bottom-4 left-4 w-32 h-32 -rotate-90 md:w-48 md:h-48">
          <Image 
            src="/images/nepali/topl.svg" 
            alt=""
            width={192}
            height={192}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute bottom-2 md:bottom-4 right-4 rotate-180 w-32 h-32 md:w-48 md:h-48">
          <Image 
            src="/images/nepali/topl.svg" 
            alt=""
            width={192}
            height={192}
            className="w-full h-full object-contain"
          />
        </div> */}

        <div className="flex flex-col justify-center items-center h-fit pt-16 md:pt-32">
          <h2 className="text-5xl md:text-6xl font-normal text-nepaliredsecond font-['Cormorant_Garamond'] -mb-2.5">
            OUR JOURNEY
          </h2>
          <p className="text-5xl text-nepaliredsecond font-['Fleur_De_Leah']">together</p>
        </div>

        <div className="bg-weddingbg mt-8">
          <TemplateThreeSingleImage />
        </div>

        <div className="py-6 bg-weddingbg">
          <div className="max-w-7xl mx-auto text-center">
            <div className="text-left space-y-6">
              <p className="text-base text-gray-500 leading-relaxed font-['Lexend']">
                Our story began with a simple chat on Facebook — just two souls connected by fate. What started as friendly 
                conversations soon turned into laughter, 
                late-night talks, and endless video calls that made us 
                forget about time. Every moment with you felt 
                different — warm, special, and real.
                <span className="hidden md:inline">
                  Then came the moment that changed everything. After only a few days of talking, I realized how deeply I had fallen for you. I couldn't hold back my feelings, so I gathered all my courage and proposed. You took an hour to think — and that hour felt like the longest one of my life. But when you finally said yes, my heart knew it had found its home.
                </span>
                <span className="md:hidden">...</span>
              </p>

              <div className="space-y-6 md:block">
                <p className="text-base text-gray-500 leading-relaxed font-['Lexend'] md:hidden">
                 From then on, life became more beautiful. We talked for hours, shared dreams, laughed endlessly, and watched our favorite series and movies together — each memory becoming a chapter of our love story.
                </p>

                <p className="text-base text-gray-500 leading-relaxed font-['Lexend']">
                 And then came a miracle. You got a week off and came to Nepal. Those days were pure magic — walking through Asan Bazaar, doing late-night shopping, sharing food, and losing myself in your eyes. Your eyes felt like an ocean — calm, deep, and full of love. Every moment we spent together became a memory I'll treasure forever.
                </p>

               
                  
                <p className="text-base text-gray-500 leading-relaxed font-['Lexend']">
                  I will love you forever, my dear. With each passing day, my love for you grows stronger, deeper, and truer. You are my heart, my happiness, and my forever. 💖
                </p>
              </div>

              {/* <button className="md:hidden text-gray-500 font-['Lexend'] text-base font-normal transition-colors duration-200 -mt-2 relative z-10">
                View More
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
