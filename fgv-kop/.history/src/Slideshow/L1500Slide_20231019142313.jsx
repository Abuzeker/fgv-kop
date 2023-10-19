import { Card, Carousel } from 'antd'
import React from 'react'
import Bleaching from '../pages/L1500/Bleaching'
import Duo1 from '../pages/L1500/Duo1'
import Sdtest from '../HMI/L1500/Sdtest'
import IceCondes from '../HMI/L1500/IceCondes'

const L1500Slide = () => {
    // Calculate the height based on the aspect ratio (1:1.75) and the viewport width
    const cardHeight = `${(window.innerWidth * 0.4)}px`;

    // Calculate the width based on the viewport width
    const cardWidth = '100vw';

    console.log(cardHeight);
    console.log(window.innerWidth);

    return (
        <div >
            <Card style={{ height: cardHeight, width: cardWidth }} bordered={true}>
                {/* <Duo1 /> */}
                <IceCondes/>
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