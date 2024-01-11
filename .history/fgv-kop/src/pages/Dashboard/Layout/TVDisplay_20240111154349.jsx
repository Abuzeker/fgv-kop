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
import { Layout } from 'antd'


const { Header, Content, Footer } = Layout;

const TVDisplay = () => {

    function SampleNextArrow(props) {
        return (
            <div
                className={`arrow next-arrow ${props.className}`}
                style={{ display: "block", background: "red" }}
                onClick={props.onClick}
            >53</div>
        );
    }

    function SamplePrevArrow(props) {
        return (
            <div
                className={`arrow prev-arrow ${props.className}`}
                style={{ display: "block", background: "red" }}
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
            <Layout className="layout">
                <Header
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >

                    <span style={{ color: 'yellow', fontSize: '30px', fontWeight: 'bold' }}>Kuantan Oil Product (KOP)</span>

                    {/* <MarqueeCard data={DataArray}></MarqueeCard> */}
                </Header>

                <Content
                    style={{
                        padding: '0px 50px 0px 50px',
                        backgroundColor: '#141414',

                    }}
                >
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
        </div >
    )
}

export default TVDisplay