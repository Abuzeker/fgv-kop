import { Card, Carousel } from 'antd'
import React from 'react'
import Bleaching from '../pages/L1500/Bleaching'
import Duo1 from '../pages/L1500/Duo1'
import Sdtest from '../HMI/L1500/Sdtest'

const L1500Slide = () => {
    // Calculate the height based on the aspect ratio (1:1.75) and the viewport width
    const cardHeight = `${(window.innerWidth * 1.75) / 100}vw`;

    // Calculate the width based on the viewport width
    const cardWidth = '100vw';

    return (
        <div >
    <Card style={{ height: cardHeight, width: cardWidth, padding:'5px' }}>
                <Duo1 />
            </Card>

            {/* <Divider orientation='left'>Production Line Monitoring</Divider>
            <Card bordered={true}  hoverable={false}>
                <Carousel autoplay autoplaySpeed={5000}>
                    <div >
                         <Bleaching /> 
                        <Sdtest/>
                    </div>
                     <div  >
                        <Duo1/>
                    </div> 
                </Carousel> 
            </Card> */}

        </div>
    )
}

export default L1500Slide