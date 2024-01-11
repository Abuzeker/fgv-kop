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
                style={{  display: "block", background: "red" }}
                onClick={props.onClick}
            >53</div>
        );
    }

    function SamplePrevArrow(props) {
        return (
            <div
                className={`arrow prev-arrow ${props.className}`}
                style={{  display: "block", background: "red" }}
                onClick={props.onClick}
            >34</div>
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
                {/* <div>
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
                </div> */}

<div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>

            </Slider>


        </div>
    )
}

export default TVDisplay