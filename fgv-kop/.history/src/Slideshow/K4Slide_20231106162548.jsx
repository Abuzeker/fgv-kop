import { Card, Carousel } from 'antd'
import React from 'react'
import Stearine from '../pages/KOPFRA/Stearine'

const K4Slide = () => {

    return (
        <div className='container'>
            <Carousel autoplay autoplaySpeed={10000}>
                <div>
                    <Stearine/>
                </div>

            </Carousel>


        </div>
    )
}

export default K4Slide