import React, { useState, useEffect } from 'react'
import slide1 from '../../imgs/Screenshot_1.png'
import slide2 from '../../imgs/Screenshot_2.png'
import slide3 from '../../imgs/Screenshot_4.png'

function MainSlider() {

    const [slides, setSlides] = useState<string[]>([slide1, slide2, slide3])

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

    useEffect(() => {
        let slider = setInterval(() => {
            setCurrentSlideIndex(currentSlideIndex + 1);
        }, 5000);
        return () => clearInterval(slider);
    }, [currentSlideIndex]);

    return (

        <div className='mainSliderContainer'>
            {slides.map((slide, idx) => (
                <div key={idx} className={`slide ${idx === currentSlideIndex ? 'show' : ''}`}>
                    <img src={slide} alt='slide' className='slideImg'></img>
                </div>
            ))}
        </div>

    )
}

export default MainSlider