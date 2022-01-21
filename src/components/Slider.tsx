import React, { useEffect, useState } from 'react'
import { Slide } from '../interfaces/slide'
import styles from './Slider.module.scss'

interface SliderProps {
  slides: Slide[]
}
 
const Slider: React.FC<SliderProps> = ({slides}) => {
  const [currentSlide, setCurrentSlide] = useState<Slide>(slides[0])
  const handleSlideLeft = () => {
    console.log(currentSlide)
    if (currentSlide === slides[0]) {
      setCurrentSlide(slides[slides.length - 1])
    } else if (currentSlide !== slides[0]) {
      setCurrentSlide(slides[currentSlide.slideId - 1])
    }
  }
  const handleSlideRight = () => {
    if (currentSlide === slides[slides.length - 1]) {
      setCurrentSlide(slides[0])
    } else {
      setCurrentSlide(slides[currentSlide.slideId + 1])
    }
  }

  if (!slides && !currentSlide) {
    return <h1>loading</h1>
  }

  return (
    <div className={styles.slider} style={{backgroundImage: `url(${currentSlide!.image})`}}>
      <button className={styles.slideButton} onClick={handleSlideLeft}>
        <h1>{'<'}</h1>
      </button>
      <div className={styles.middleSection}>
        {slides.map((slide, id) => (
          <div key={id} className={styles.circle}>
            
          </div>
        ))}
      </div>
      <button className={styles.slideButton} onClick={handleSlideRight}>
        <h1>{'>'}</h1>
      </button>
    </div>
  );
}
 
export default Slider;