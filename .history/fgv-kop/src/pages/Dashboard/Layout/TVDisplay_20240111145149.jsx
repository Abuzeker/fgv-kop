// import { Carousel } from 'antd'
import React from 'react'
import Dashboard2 from './Dasbosrd2'
// import Navbar from './Navbar'
import Dashboard1 from './Dashboard1'
import Dashboard3 from './Dashboard3'
import L1000Slide from '../../../Slideshow/L1000Slide'
import Slider from "react-slick";


const TVDisplay = () => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            // className={className}
            style={{ ...style, }}
            onClick={onClick}
          >nxt</div>
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            // className={className}
            onClick={onClick}
          >prev</div>
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