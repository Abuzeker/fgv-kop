import React, { Component, createRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Autoplay } from 'swiper/modules';
import Dashboard1 from './Dashboard1';
import Dashboard2 from './Dasbosrd2';
import Dashboard3 from './Dashboard3';
import { Button, Layout } from "antd";
import { PauseCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";
import L1000Slide from "../../../Slideshow/L1000Slide";
import K4Slide from "../../../Slideshow/K4Slide";
import L1500Slide from "../../../Slideshow/L1500Slide";
import K5Slide from "../../../Slideshow/K5Slide";
import Dashboard4 from "./Dashboard4";

const { Header, Content, Footer } = Layout;

export default class TVDisplay extends Component {
    constructor(props) {
        super(props);
        this.swiperRef = createRef(); // Create a ref for managing Swiper instance
    }

    play = () => {
        // Access swiper instance from ref and start autoplay
        this.swiperRef.current.swiper.autoplay.start();
    }

    pause = () => {
        // Access swiper instance from ref and stop autoplay
        this.swiperRef.current.swiper.autoplay.stop();
    }

    render() {
        return (
            <div>
                <Layout className="layout">
                    <Header style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <span style={{ color: 'yellow', fontSize: '30px', fontWeight: 'bold' }}>Kuantan Oil Product (KOP)</span>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Button onClick={this.play} style={{ marginRight: '5px', fontSize: '15px' }} size='large' type='primary' icon={<PlayCircleOutlined />}>
                                Play
                            </Button>
                            <Button onClick={this.pause} style={{ marginRight: '10px', fontSize: '15px' }} size='large' type='primary' danger icon={<PauseCircleOutlined />}>
                                Pause
                            </Button>
                        </div>
                    </Header>
                    <Content style={{
                        padding: '0px 50px 0px 50px',
                        backgroundColor: '#141414',
                    }}>
                        <Swiper
                            ref={this.swiperRef}
                            modules={[Navigation, Autoplay]} // Register Navigation and Autoplay modules
                            navigation
                            autoplay={{
                                delay: 10000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            loop={true}>
                            <SwiperSlide><Dashboard1 /></SwiperSlide>
                            <SwiperSlide><Dashboard3 /></SwiperSlide>
                            <SwiperSlide><Dashboard2 /></SwiperSlide>
                            <SwiperSlide><Dashboard4 /></SwiperSlide>
                            <SwiperSlide><L1000Slide /></SwiperSlide>
                            <SwiperSlide><K4Slide /></SwiperSlide>
                            <SwiperSlide><L1500Slide /></SwiperSlide>
                            <SwiperSlide><K5Slide /></SwiperSlide>

                        </Swiper>
                    </Content>
                    <Footer style={{
                        textAlign: 'center',
                        backgroundColor: '#141414'
                    }}>
                        <span style={{ color: 'white' }}>FGVR KOP ©2023 Created by IOTCS</span>
                    </Footer>
                </Layout>
            </div>
        );
    }
}
