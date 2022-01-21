import React, { useState } from 'react'
import { Slide } from '../interfaces/slide'
import styles from './Slider.module.scss'

interface SliderProps {
  slides: Slide[]
}
 
const Slider: React.FC<SliderProps> = ({slides}) => {
  const [slideArray, setSlideArray] = useState<Slide[]>(slides)
  const [whichDirection, setWhichDirection] = useState<string>('')
  const handleSlideLeft = () => {
    setSlideArray([slideArray[slideArray.length - 1], ...slideArray.slice(0, slideArray.length - 1)])
    setWhichDirection('left')
  }
  const handleSlideRight = () => {
    setSlideArray([...slideArray.slice(1), slideArray[0]])
    setWhichDirection('right')
  }

  return (
    <div className={styles.container}>
      <div className={styles.blocker}>
      </div>
      <div className={styles.slider} >
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
          <h1 className={styles.arrow}>{'<'}</h1>
        </button>
        <div className={styles.middleSection}>
          {slideArray.map((slide, id) => (
            <div key={id} className={styles.circle}>
              
            </div>
          ))}
        </div>
        <button className={styles.slideButton} onClick={handleSlideRight}>
          <h1 className={styles.arrow}>{'>'}</h1>
        </button>
      </div>
      <div className={styles.blocker}>
      </div>
    </div>
  );
}
 
export default Slider;