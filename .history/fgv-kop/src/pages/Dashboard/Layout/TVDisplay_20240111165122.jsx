// TVDisplay.js

import React, { Component } from "react";
import Dashboard2 from './Dasbosrd2';
import Dashboard1 from './Dashboard1';
import Dashboard3 from './Dashboard3';
import L1000Slide from '../../../Slideshow/L1000Slide';
import Slider from 'react-slick';
import './tvcss.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PlayPauseButtons from './PlayPauseButtons';
import { Button } from "antd";
import { getFromLocalStorage } from "../../../Memorystorage/localstorage";

function SampleNextArrow(props) {
    return (
        <div
            className={`arrow next-arrow ${props.className}`}
            onClick={props.onClick}
        ></div>
    );
};

function SamplePrevArrow(props) {
    return (
        <div
            className={`arrow prev-arrow ${props.className}`}
            onClick={props.onClick}
        ></div>
    );
};

export default class TVDisplay extends Component {
    

    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }
    play() {
        this.slider.slickPlay();
    }
    pause() {
        this.slider.slickPause();
    }

    render() {

        const settings = {
            dots: true,
            speed: 500,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        };
        return (
            <div>
                {/* <Button onClick={this.play}>
                    Play
                </Button>
                <Button  onClick={this.pause}>
                    Pause
                </Button> */}
                <Slider ref={slider => (this.slider = slider)} {...settings}>
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
                <div style={{ textAlign: "center" }}>
                </div>

                {/* Add play/pause buttons */}
                {/* <PlayPauseButtons onPlay={handlePlay} onPause={handlePause} /> */}
            </div >
        );
    };
}

// export default TVDisplay;
