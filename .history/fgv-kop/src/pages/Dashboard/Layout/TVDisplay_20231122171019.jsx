import { Carousel } from 'antd'
import React from 'react'
import Dashboard2 from './Dasbosrd2'
import Navbar from './Navbar'

const TVDisplay = () => {
    return (
        <div>

            <Carousel fade={true} autoplay autoplaySpeed={50000} >
                <Dashboard2/>
                <Navbar/>
            </Carousel>


        </div>
    )
}

export default TVDisplay