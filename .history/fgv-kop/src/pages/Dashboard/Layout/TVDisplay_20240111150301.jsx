// import { Carousel } from 'antd'
import React from 'react'
import Dashboard2 from './Dasbosrd2'
// import Navbar from './Navbar'
import Dashboard1 from './Dashboard1'
import Dashboard3 from './Dashboard3'
import L1000Slide from '../../../Slideshow/L1000Slide'
import Slider from "react-slick";
import './tvcss.css';

const TVDisplay = () => {

    function SampleNextArrow(props) {
        return (
          <div
            className={`arrow next-arrow ${props.className}`}
            onClick={props.onClick}
          >sfdsfsdfsd</div>
        );
      }
    
      function SamplePrevArrow(props) {
        return (
          <div
            className={`arrow prev-arrow ${props.className}`}
            onClick={props.onClick}
          >232323232323</div>
        );
      }

    const settings = {
        dots: true,
        speed: 500,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        fade: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    {/* <Dashboard2 /> */}sda
                </div>
                <div>

                    {/* <Dashboard1 /> */}fff
                </div>
                <div>

                    {/* <Dashboard3 /> */}324
                </div>
                <div>

                    {/* <L1000Slide /> */}23454
                </div>

            </Slider>


        </div>
    )
}

export default TVDisplay