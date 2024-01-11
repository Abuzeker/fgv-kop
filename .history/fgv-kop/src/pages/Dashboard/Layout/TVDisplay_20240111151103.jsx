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

    // nextArrow: (
    //     <div>
    //         <div className="next-slick-arrow">
    //             <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" /></svg>
    //         </div>
    //     </div>
    // ),

    //     prevArrow: (
    //         <div>
    //             <div className="next-slick-arrow rotate-180">
    //                 <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" /></svg>
    //             </div>
    //         </div>
    //     ),

    const settings = {
        dots: true,
        speed: 500,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        fade: true,
        nextArrow: (
            <div>
                <div className="next-slick-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="red" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" /></svg>
                </div>
            </div>
        ),
        prevArrow: (
            <div>
                <div className="next-slick-arrow rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="red" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" /></svg>
                </div>
            </div>
        )
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