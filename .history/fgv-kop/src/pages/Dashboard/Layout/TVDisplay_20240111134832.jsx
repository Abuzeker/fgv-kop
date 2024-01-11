import { Button, Carousel } from 'antd';
import React, { useState } from 'react';
import Dashboard2 from './Dasbosrd2';
import Dashboard1 from './Dashboard1';
import Dashboard3 from './Dashboard3';
import L1000Slide from '../../../Slideshow/L1000Slide';

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

    const SampleNextArrow = props => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'block', background: 'red' }}
                onClick={onClick}
            />
        );
    };

    const SamplePrevArrow = props => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'block', background: 'green' }}
                onClick={onClick}
            />
        );
    };

    const settings = {
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div>
            <Carousel
                fade={true}
                dotPosition='top'
                afterChange={(current) => {
                    setCurrentSlide(current);
                    console.log('Slide changed to', current);
                }}
                arrows {...settings}
            >
                <Dashboard1 />
                <Dashboard2 />
                <Dashboard3 />
                <L1000Slide />
            </Carousel>
        </div>
    );
};

export default TVDisplay;
