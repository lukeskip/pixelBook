import React, { useState } from "react";

export default function Slides({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % slides.length;
    setCurrentSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(prevIndex);
  };
  return (
    <div className="slidesWrapper">
      <div className="controls left" onClick={prevSlide}>
        {"<"}
      </div>
      <div className="slides">
        {slides[currentSlide] && (
          <div className="slide">
            <div className="image">
            {slides[currentSlide].image &&  <img src={slides[currentSlide].image} alt="" />
            }
            </div>
            <div className="info">
              <div className="tags">
                {slides[currentSlide].tags.map((tag) => {
                  return <div className="tag">{tag}</div>;
                })}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="controls right" onClick={nextSlide}>
        {">"}
      </div>
    </div>
  );
}
