// import { Carousel } from 'antd'
import React from 'react'
import Dashboard2 from './Dasbosrd2'
// import Navbar from './Navbar'
import Dashboard1 from './Dashboard1'
import Dashboard3 from './Dashboard3'
import L1000Slide from '../../../Slideshow/L1000Slide'
import Slider from "react-slick";


const TVDisplay = () => {

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        fade: true
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