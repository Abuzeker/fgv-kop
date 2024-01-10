import { Carousel } from 'antd'
import React from 'react'
import Dashboard2 from './Dasbosrd2'
// import Navbar from './Navbar'
import Dashboard1 from './Dashboard1'
import Dashboard3 from './Dashboard3'
import L1000Slide from '../../../Slideshow/L1000Slide'

const TVDisplay = () => {
    return (
        <div>
            <Carousel fade={true} autoplay autoplaySpeed={30000} dotPosition='top'>
                <Dashboard2/>
                <Dashboard1/>
                <Dashboard3/>
                <L1000Slide/>
            </Carousel>
            

        </div>
    )
}

export default TVDisplay