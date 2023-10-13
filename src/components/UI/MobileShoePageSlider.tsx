import React, { useState, useEffect } from 'react'

interface MobileShoePageSliderProps {
    slides: any[],
}

function MobileShoePageSlider({ slides }: MobileShoePageSliderProps) {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    useEffect(() => {
        const lastIndex = slides.length - 1;
        if (currentSlideIndex < 0) {
            setCurrentSlideIndex(lastIndex);
        }
        if (currentSlideIndex > lastIndex) {
            setCurrentSlideIndex(0);
        }
    }, [currentSlideIndex, slides]);

    return (
        <div className='mobileShoePageSlider'>

            <div className='mobileShoePageSliderContainer'>
                <div className='mobileShoePageSlides'>
                    {slides.map((slide, idx) => (
                        <img src={slide} alt='slide' key={idx} className={`mobileShoePageSliderSlide ${idx === currentSlideIndex ? 'show' : ''}`}></img>
                    ))}
                </div>


                <div className='shoePageSliderHorisontalContainer'>
                    {slides.map((slide, idx) => {
                        let position = " nextSlide"
                        if (idx === currentSlideIndex) {
                            position = " activeSlide"
                        }
                        if (idx === currentSlideIndex - 1 || (currentSlideIndex === 0 && idx === slides.length - 1)) {
                            position = " prevSlide"
                        }
                        return (
                            <div
                                key={idx}
                                onClick={() => setCurrentSlideIndex(idx)}
                                className={'horisontalSlide' + position}
                            ></div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default MobileShoePageSlider