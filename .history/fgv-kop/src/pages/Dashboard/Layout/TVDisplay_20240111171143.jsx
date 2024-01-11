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
import { Button, Layout } from "antd";
import { getFromLocalStorage } from "../../../Memorystorage/localstorage";

const { Header, Content, Footer } = Layout;


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
                <Layout className="layout">
                    <Header
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >

                        <span style={{ color: 'yellow', fontSize: '30px', fontWeight: 'bold' }}>Kuantan Oil Product (KOP)</span>
                        <div style={{ textAlign: "center" }}>

                            <Button onClick={this.play} style={{ marginRight: '30px' }} type='primary'>
                                <span style={{ fontSize: '15px', fontWeight: 'bold' }}>
                                    Play
                                </span>
                            </Button>

                            <Button onClick={this.pause} style={{ marginRight: '30px' }} type='primary' danger>
                                <span style={{ fontSize: '15px', fontWeight: 'bold' }}>
                                    Pause
                                </span>
                            </Button>
                        </div>
                    </Header>
                    <Content
                        style={{
                            padding: '0px 50px 0px 50px',
                            backgroundColor: '#141414',
                            // opacity:0.6
                        }}
                    >
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
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                            backgroundColor: '#141414'
                        }}
                    >
                        <span style={{ color: 'white' }}>
                            FGVR KOP ©2023 Created by IOTCS
                        </span>
                    </Footer>
                </Layout>

                {/* Add play/pause buttons */}
                {/* <PlayPauseButtons onPlay={handlePlay} onPause={handlePause} /> */}
            </div >
        );
    };
}

// export default TVDisplay;
