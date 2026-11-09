"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface IImageSliderProps {
  images: string[];
  title: string;
}

const ImageSlider = ({ images, title }: IImageSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-t-2xl">
      <div className="relative aspect-video w-full">
        <Image
          src={images[activeIndex]}
          alt={`${title} - Image ${activeIndex + 1}`}
          fill
          priority={false}
          className="object-cover transition-all duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {images.length > 1 && (
        <>
          {/* Previous button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white backdrop-blur-sm transition hover:bg-[#730606]"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white backdrop-blur-sm transition hover:bg-[#730606]"
          >
            <ChevronRight size={20} />
          </button>

          {/* Pagination */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to image ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-6 bg-text-fourth"
                    : "w-2 bg-white/70 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
