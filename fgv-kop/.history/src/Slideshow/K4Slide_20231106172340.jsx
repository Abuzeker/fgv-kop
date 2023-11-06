import { Card, Carousel } from 'antd'
import React from 'react'
import Stearine from '../pages/KOPFRA4/Stearine'
import Chilled from '../pages/KOPFRA4/Chilled'
import ParameterSetting from '../pages/KOPFRA4/ParameterSetting'

const K4Slide = () => {

    return (
        <div className='container'>
            <Carousel autoplay autoplaySpeed={10000}>
                <div>
                    <Stearine/>
                </div>
                <div>
                    <Chilled/>
                </div>
                <div>
                    <ParameterSetting/>
                </div>

            </Carousel>


        </div>
    )
}

export default K4Slide