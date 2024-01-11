import { Carousel } from 'antd';
import React, { useState } from 'react';
import Dashboard2 from './Dasbosrd2';
import Dashboard1 from './Dashboard1';
import Dashboard3 from './Dashboard3';
import L1000Slide from '../../../Slideshow/L1000Slide';

const TVDisplay = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const SampleNextArrow = ({ className, onClick }) => (
        <div className={className} onClick={onClick} style={{ right: '20px', zIndex: 1 }}>
            <span role="img" aria-label="next" style={{ fontSize: '24px', color: 'red' }}>
                ➡️
            </span>
        </div>
    );

    const SamplePrevArrow = ({ className, onClick }) => (
        <div className={className} onClick={onClick} style={{ left: '20px', zIndex: 1 }}>
            <span role="img" aria-label="prev" style={{ fontSize: '24px', color: 'green' }}>
                ⬅️
            </span>
        </div>
    );

    const settings = {
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        afterChange: (current) => setCurrentSlide(current),
    };

    return (
        <div>
            <Carousel
                fade={true}
                dotPosition='top'
                {...settings}
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
