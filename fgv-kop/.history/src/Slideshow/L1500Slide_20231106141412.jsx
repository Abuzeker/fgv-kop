import { Card, Carousel } from 'antd'
import React from 'react'
import Bleaching from '../pages/L1500/Bleaching'
import Duo1 from '../pages/L1500/Duo1'
import Sdtest from '../HMI/L1500/Sdtest'
import Deodorising from '../HMI/L1000/Deodorising'
import Duo2 from '../pages/L1500/Duo2'
import IceCondes from '../pages/L1500/IceCondes'


const L1500Slide = () => {

    return (
        <div className='containerslidehmi'>
            <Carousel autoplay autoplaySpeed={3000}>
                <div>
                    <Duo1 />
                </div>

                <div>
                    <Duo2 />
                </div>

                <div>
                    <Bleaching />
                </div>
                <div>
                    <IceCondes />

                </div>

            </Carousel>


        </div>
    )
}

export default L1500Slide