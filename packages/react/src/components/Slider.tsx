import React, { useState } from 'react'
import { Slide } from '../interfaces/slide'
import styles from './Slider.module.scss'
import arrowRight from '../assets/right-svgrepo-com.svg'
import arrowLeft from '../assets/left-svgrepo-com.svg'

interface SliderProps {
  slides: Slide[]
}
 
const Slider: React.FC<SliderProps> = ({slides}) => {
  const [slideArray, setSlideArray] = useState<Slide[]>(slides)
  const [currentSlideId, setCurrentSlideId] = useState<number>(0)
  const [whichDirection, setWhichDirection] = useState<string>('')

  const handleSlideLeft = () => {
    setSlideArray([slideArray[slideArray.length - 1], ...slideArray.slice(0, slideArray.length - 1)])
    setWhichDirection('left')
    if (currentSlideId > 0) {
      setCurrentSlideId(prev => prev - 1)
    } else {
      setCurrentSlideId(slideArray.length - 1)
    }
  }

  const handleSlideRight = () => {
    setSlideArray([...slideArray.slice(1), slideArray[0]])
    setWhichDirection('right')
    if (currentSlideId < slideArray.length - 1) {
      setCurrentSlideId(prev => prev + 1)
    } else {
      setCurrentSlideId(0)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.blocker}>
      </div>
      <div className={styles.slider}>
        {slides.map((slide) => (
          <div 
            key={slide.image} 
            className={`${styles.slide} ${slideArray[0] === slide ? '' : whichDirection === 'right' ? styles.slideFadingToLeft : styles.slideFadingToRight}`} 
            style={{backgroundImage: `url(${slide.image})`}}
          >
            <h1>{slide.label}</h1>
            <p>{slide.paragraph}</p>
          </div>
        ))}
        <button className={styles.slideButton} onClick={handleSlideLeft}>
        <img src={arrowLeft} alt="" className={styles.arrow} />
        </button>
        <div className={styles.middleSection} id="slider">
          {slideArray.map((slide, id) => (
            <div key={id} className={`${styles.circle} ${id === currentSlideId ? styles.current : ''}`}>
              
            </div>
          ))}
        </div>
        <button className={styles.slideButton} onClick={handleSlideRight}>
          <img src={arrowRight} alt="" className={styles.arrow} />
        </button>
      </div>
      <div className={styles.blocker}>
      </div>
    </div>
  );
}
 
export default Slider;