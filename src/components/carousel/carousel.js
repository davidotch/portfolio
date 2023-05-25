import { useState } from 'react';
import arrowBack from '../../assets/carousel_arrow_back.png';
import arrowForward from '../../assets/carousel_arrow_forward.png';

export default function Carousel({ imageSlider }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const nextImg = () => {
    if (currentIndex === imageSlider.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousImg = () => {
    if (currentIndex === 0) {
      setCurrentIndex(imageSlider.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="carousel">
      <img className='carousel_img' src={imageSlider[currentIndex]} alt=''/>
      {imageSlider.length > 1 && (
        <>
          <img
            className="carousel_arrow carousel_arrow_back"
            src={arrowBack}
            alt="Show previous img"
            onClick={nextImg}
          />
          <img
            className="carousel_arrow carousel_arrow_forward"
            src={arrowForward}
            alt="Show next img"
            onClick={previousImg}
          />

          <p className="slideCount">
            {currentIndex + 1}/{imageSlider.length}
          </p>
        </>
      )}
    </div>
  );
}
