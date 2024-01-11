import { Button, Carousel } from 'antd'
import React, { useState } from 'react'
import Dashboard2 from './Dasbosrd2'
// import Navbar from './Navbar'
import Dashboard1 from './Dashboard1'
import Dashboard3 from './Dashboard3'
import L1000Slide from '../../../Slideshow/L1000Slide'

const TVDisplay = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleChangeSlide = (newSlide) => {
        setCurrentSlide(newSlide);
    };

    const handleNext = () => {
        const nextSlide = (currentSlide + 1) % 4; // Assuming you have 4 slides
        setCurrentSlide(nextSlide);
    };

    const handlePrev = () => {
        const prevSlide = (currentSlide - 1 + 4) % 4; // Assuming you have 4 slides
        setCurrentSlide(prevSlide);
    };

    return (
        <div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <Button onClick={() => handlePrev()}>Previous</Button>
                <span style={{ margin: '0 10px', fontSize: '16px' }}>{currentSlide + 1} / 4</span>
                <Button onClick={() => handleNext()}>Next</Button>
            </div>
            <Carousel fade={true} autoplay autoplaySpeed={30000} dotPosition='top' afterChange={(current) => setCurrentSlide(current)}>
                <Dashboard1 />
                <Dashboard2 />
                <Dashboard3 />
                <L1000Slide />
            </Carousel>
        </div>
    );
};


export default TVDisplay