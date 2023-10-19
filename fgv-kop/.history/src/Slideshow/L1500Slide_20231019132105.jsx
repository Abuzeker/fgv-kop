import { Card, Carousel } from 'antd'
import React from 'react'
import Bleaching from '../pages/L1500/Bleaching'
import Duo1 from '../pages/L1500/Duo1'

const L1500Slide = () => {
    return (
        <div style={{ marginTop: '10px' }}>

            {/* <Divider orientation='left'>Production Line Monitoring</Divider> */}
            <Card bordered={true} style={{ borderRadius: 15}} hoverable={false}>
                <Carousel autoplay autoplaySpeed={5000}>
                    <div >
                        <Bleaching />
                    </div>
                    {/* <div  >
                        <Duo1/>
                    </div> */}
                </Carousel>
            </Card>

        </div>
    )
}

export default L1500Slide