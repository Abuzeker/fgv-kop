import { Card, Carousel } from 'antd'
import React from 'react'
import Deo from '../pages/L1000/Deo'
import Bleaching from '../pages/L1000/Bleaching'
import Filtration from '../pages/L1000/Filtration'


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
            </Carousel>


        </div>
    )
}

export default L1000Slide