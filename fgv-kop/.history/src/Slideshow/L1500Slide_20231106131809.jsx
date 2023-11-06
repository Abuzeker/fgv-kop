import { Card, Carousel } from 'antd'
import React from 'react'
import Bleaching from '../pages/L1500/Bleaching'
import Duo1 from '../pages/L1500/Duo1'
import Sdtest from '../HMI/L1500/Sdtest'
import IceCondes from '../HMI/L1500/IceCondes'
import Deodorising from '../HMI/L1000/Deodorising'

const L1500Slide = () => {

    return (
        <div >
            <Carousel autoplay autoplaySpeed={3000}>
                <div>
                    <Deodorising/>
                </div>

                <div>
                    <Bleaching /> 
                </div>

                <div>
                    <Duo1/>
                </div>
            </Carousel>


        </div>
    )
}

export default L1500Slide