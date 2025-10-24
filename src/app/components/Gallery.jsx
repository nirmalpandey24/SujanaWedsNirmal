import Image from 'next/image';
import Carousel from './Carousel';

const Gallery = () => {
    return (
        <section className="py-24 lg:py-11 h-fit relative bg-weddingbg">
            <div className="absolute bottom-4 left-4 w-32 h-32 -rotate-90 md:w-48 md:h-48">
                <Image
                    src="/images/nepali/topl.svg"
                    alt="Decorative element"
                    width={192}
                    height={192}
                    className="w-full h-full"
                />
            </div>

            <div className="absolute bottom-4 right-4 rotate-180 w-32 h-32 md:w-48 md:h-48">
                <Image
                    src="/images/nepali/topl.svg"
                    alt="Decorative element"
                    width={192}
                    height={192}
                    className="w-full h-full"
                />
            </div>

            <div className="py-10 px-4">
                <div className="w-full text-center md:text-left md:max-w-[70%] md:mx-auto">
                    <div className="mb-10">
                        <h2 className="text-5xl md:text-6xl font-bold uppercase text-nepaliredsecond font-['Cormorant_Garamond'] mb-0">
                            Gallery
                        </h2>
                        <h2 className="text-5xl font-normal lowercase text-nepaliredsecond font-['Fleur_De_Leah'] mb-2">
                            of our love
                        </h2>
                    </div>

                    <div className="flex items-center justify-center py-6 px-4">
                        <div className="relative mx-auto w-full max-w-4xl">
                            <div className="relative rounded-lg overflow-hidden mb-10">
                                <div className="aspect-w-16 aspect-h-9">
                                    <iframe
                                        src="https://drive.google.com/file/d/1HRi9ZELGA5JH7gSMRq1LrC4Ss4de__va/preview"
                                        title="Our Wedding Video"
                                        className="w-full h-48 md:h-[32rem] rounded-lg shadow-lg"
                                        allow="autoplay"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            <Carousel />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;