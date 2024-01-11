import { Carousel } from 'antd'
import React, { Component } from "react";
import Dashboard2 from './Dasbosrd2'
// import Navbar from './Navbar'
import Dashboard1 from './Dashboard1'
import Dashboard3 from './Dashboard3'
import L1000Slide from '../../../Slideshow/L1000Slide'
import Slider from "react-slick";


const TVDisplay = () => {

    const settings = {
        dots: true,
        speed: 5000,
        slidesToShow: 1,
        fade: true
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
                    <div>
                        asdasd
                    </div>
                </div>
                <div>
                    <h3>2</h3>
                    <div>
                        asdasd
                    </div>
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