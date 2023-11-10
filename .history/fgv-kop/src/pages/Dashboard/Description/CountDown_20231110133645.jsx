import { Card, Col, Row, Statistic } from 'antd'
import React from 'react'


const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

const formatCountdown = (value) => {
    const days = Math.floor(value / (1000 * 60 * 60 * 24));
    const hours = Math.floor((value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((value % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((value % (1000 * 60)) / 1000);

    return `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
};

const CountDown = () => {
    return (
        <div>
            <Card style={{ fill: 'ActiveBorder', background: 'rgba(247, 247, 247, 0.8)' }}>

                <Row gutter={16}>

                    <Col
                        span={24}
                        style={{
                            marginTop: 4,
                        }}
                    >
                        <Countdown title="Count Down" value={deadline} format={formatCountdown} />
                    </Col>

                </Row>
                </Card>
        </div>
    )
}

export default CountDown