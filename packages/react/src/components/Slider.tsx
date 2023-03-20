import React, { useEffect, useState } from 'react'
import  './Slider.scss'
import arrowRight from '../assets/right.svg'
import arrowLeft from '../assets/left.svg'

interface SliderProps {
  slides: {
    image: string;
    label: string;
    paragraph: string;
  }[]
}
  
export const Slider: React.FC<SliderProps> = ({slides}) => {
  const [currentSlideId, setCurrentSlideId] = useState<number>(0)
  const [slideDirection, setSlideDirection] = useState<string>('')
  const [downX, setDownX] = useState(1)
  const [upX, setUpX] = useState(1)

  const slideLeft = () => {
    setSlideDirection('left')
    if (currentSlideId > 0) {
      setCurrentSlideId(prev => prev - 1)
    } else {
      setCurrentSlideId(slides.length - 1)
    }
  }

  const slideRight = () => {
    setSlideDirection('right')
    if (currentSlideId < slides.length - 1) {
      setCurrentSlideId(prev => prev + 1)
    } else {
      setCurrentSlideId(0)
    }
  }

  const listenToMouseDown = (e: React.MouseEvent) => {
    setDownX(e.clientX)
  }

  const listenToTouchStart = (e: React.TouchEvent) => {
    setDownX(e.touches[0].clientX)
  }

  const listenToMouseUp = (e: React.MouseEvent) => {
    setUpX(e.clientX)
  }

  const listenToTouchEnd = (e: React.TouchEvent) => {
    setUpX(e.changedTouches[0].clientX)
  }

  useEffect(() => {
    if (downX + 100 < upX) {
      slideLeft()
    } else if (downX - 100 > upX) {
      slideRight()
    }
  }, [upX])

  return (
    <div 
      className="container"
      onMouseDown={(e) => listenToMouseDown(e)}
      onMouseUp={(e) => listenToMouseUp(e)}
      onTouchStart={(e => listenToTouchStart(e))}
      onTouchEnd={(e => listenToTouchEnd(e))}
    >
      <div className="slider">
        {slides.map((slide, idx) => (
          <div 
            key={slide.image}
            style={{backgroundImage: `url(${slide.image})`}}
            className={`slide ${currentSlideId === idx ? '' : slideDirection === 'right' ? 'hideToLeft' : 'hideToRight'}`} 
          >
            <h1>{slide.label}</h1>
            <p>{slide.paragraph}</p>
          </div>
        ))}
        <button className="slideButton" onClick={slideLeft}>
        <img src={arrowLeft} alt="left" className="arrow" />
        </button>
        <div className="middleSection" id="slider">
          {slides.map((slide, id) => (
            <div key={id} className={`circle ${id === currentSlideId ? 'current' : ''}`}>
            </div>
          ))}
        </div>
        <button className="slideButton" onClick={slideRight}>
          <img src={arrowRight} alt="right" className="arrow" />
        </button>
      </div>
    </div>
  );
}