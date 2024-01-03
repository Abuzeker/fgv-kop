import { Carousel } from 'antd'
import React from 'react'
import Dashboard2 from './Dasbosrd2'
// import Navbar from './Navbar'
import Dashboard1 from './Dashboard1'
import L1000Slide from '../../../Slideshow/L1000Slide'

const TVDisplay = () => {
    return (
        <div>

            <Carousel fade={true} autoplay autoplaySpeed={80000} >
                <Dashboard2/>
                <Dashboard1/>
                <L1000Slide/>
            </Carousel>


        </div>
    )
}

export default TVDisplay