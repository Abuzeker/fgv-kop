// import { Carousel } from 'antd'
import React from 'react'
import Dashboard2 from './Dasbosrd2'
// import Navbar from './Navbar'
import Dashboard1 from './Dashboard1'
import Dashboard3 from './Dashboard3'
import L1000Slide from '../../../Slideshow/L1000Slide'
import Slider from "react-slick";
import './tvcss.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TVDisplay = () => {

    function SampleNextArrow(props) {
        return (
            <div
                className={`arrow next-arrow ${props.className}`}
                onClick={props.onClick}
            ></div>
        );
    }

    function SamplePrevArrow(props) {
        return (
            <div
                className={`arrow prev-arrow ${props.className}`}
                onClick={props.onClick}
            ></div>
        );
    }



    const settings = {
        dots: true,
        speed: 500,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <Dashboard2 />
                </div>
                <div>

                    <Dashboard1 />
                </div>
                <div>

                    <Dashboard3 />
                </div>
                <div>

                    <L1000Slide />
                </div>

            </Slider>


        </div>
    )
}

export default TVDisplay