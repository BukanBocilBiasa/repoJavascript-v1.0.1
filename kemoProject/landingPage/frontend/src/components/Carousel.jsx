import React, { useState, useEffect } from "react";

const slides = [
  "https://cdn.pixabay.com/photo/2021/06/05/16/11/nude-6313135_960_720.jpg",
  "https://cdn.pixabay.com/photo/2021/04/19/06/18/nude-6190400_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/07/01/17/32/woman-6379931_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/04/01/06/24/nude-4990082_1280.jpg",
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!animating) {
        setAnimating(true);
        const direction = Math.random() > 0.5 ? 1 : -1;
        setCurrentSlide(
          (prev) => (prev + direction + slides.length) % slides.length
        );
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [animating]);

  useEffect(() => {
    if (animating) {
      const timeout = setTimeout(() => {
        setAnimating(false);
      }, 1000); // Adjust the duration to match the CSS transition duration

      return () => clearTimeout(timeout);
    }
  }, [currentSlide, animating]);

  return (
    <div className="carousel relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-item w-full flex-shrink-0">
            <img
              src={slide}
              className="w-full object-cover h-64 md:h-96"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between px-4 md:px-8">
        <button
          className="btn glass"
          onClick={() => {
            if (!animating) {
              setAnimating(true);
              setCurrentSlide(
                (currentSlide - 1 + slides.length) % slides.length
              );
            }
          }}
        >
          ❮
        </button>
        <button
          className="btn glass"
          onClick={() => {
            if (!animating) {
              setAnimating(true);
              setCurrentSlide((currentSlide + 1) % slides.length);
            }
          }}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
