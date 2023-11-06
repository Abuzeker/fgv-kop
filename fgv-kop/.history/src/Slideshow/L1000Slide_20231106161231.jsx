import { Card, Carousel } from 'antd'
import React from 'react'
import Deo from '../pages/L1000/Deo'
import Bleaching from '../pages/L1000/Bleaching'
import Filtration from '../pages/L1000/Filtration'
import Vacuum from '../pages/L1000/Vacuum'


const L1000Slide = () => {

    return (
        <div className='container'>
            <Carousel autoplay autoplaySpeed={3000}>
                <div>
                    <Deo />
                </div>
                <div>
                    <Bleaching />
                </div>
                <div>
                    <Filtration/>
                </div>
                <div>
                    <Vacuum/>
                </div>
            </Carousel>


        </div>
    )
}

export default L1000Slide