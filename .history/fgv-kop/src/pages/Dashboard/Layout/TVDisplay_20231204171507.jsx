import { Carousel } from 'antd'
import React from 'react'
import Dashboard2 from './Dasbosrd2'
// import Navbar from './Navbar'
import Dashboard1 from './Dashboard1'

const TVDisplay = () => {
    return (
        <div>

            <Carousel fade={true} autoplay autoplaySpeed={50000} >
                <Dashboard2/>
                <Dashboard1/>
            </Carousel>


        </div>
    )
}

export default TVDisplay