import React, { useState, useEffect, useRef } from 'react'

interface ShoePageSliderProps {
    slides: any[]
}

function ShoePageSlider({ slides }: ShoePageSliderProps) {

    const middleIndex = Math.floor(slides.length / 2)

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    const [areArrowsShown, setAreArrowsShown] = useState(false)

    useEffect(() => {
        const lastIndex = slides.length - 1;
        if (currentSlideIndex < 0) {
            setCurrentSlideIndex(lastIndex);
        }
        if (currentSlideIndex > lastIndex) {
            setCurrentSlideIndex(0);
        }
    }, [currentSlideIndex, slides]);

    const handlePrevSlideClick = () => {
        setCurrentSlideIndex(prevSlide => prevSlide - 1)
    }

    const handleNextSlideClick = () => {
        setCurrentSlideIndex(prevSlide => prevSlide + 1)
    }

    return (
        <div className='shoePageSlider'>
            <div className='shoePageSliderVerticalContainer'>
                <div className='shoePageSliderVertical'>
                    {slides.map((slide, idx) => {
                        let position = " nextSlide"
                        if (idx === currentSlideIndex) {
                            position = " activeSlide"
                        }
                        if (idx === currentSlideIndex - 1 || (currentSlideIndex === 0 && idx === slides.length - 1)) {
                            position = " prevSlide"
                        }
                        return (
                            <img
                                key={idx}
                                src={slide}
                                alt='slide'
                                onClick={() => setCurrentSlideIndex(idx)}
                                className={'verticalSlide' + position}
                            ></img>
                        )
                    })}
                </div>
            </div>

            <div
                className='shoePageSliderCarousel'
                onMouseEnter={() => setAreArrowsShown(true)}
                onMouseLeave={() => setAreArrowsShown(false)}
            >
                <button onClick={handlePrevSlideClick} className={'arrow' + (areArrowsShown ? 'show' : '')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                <div className='shoePageSlides'>
                    {slides.map((slide, idx) => (
                        <img src={slide} alt='slide' key={idx} className={`shoePageSliderSlide ${idx === currentSlideIndex ? 'show' : ''}`}></img>
                    ))}
                </div>

                <button onClick={handleNextSlideClick} className={'arrow' + (areArrowsShown ? 'show' : '')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>


        </div>
    )
}

export default ShoePageSlider