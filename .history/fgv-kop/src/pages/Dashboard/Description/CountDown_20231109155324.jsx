import { Col, Row, Statistic } from 'antd'
import React from 'react'


const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

const customFormatter = (value) => {
    // Customize the countdown format based on the remaining time value (in seconds)
    const days = Math.floor(value / (3600 * 24));
    const hours = Math.floor((value % (3600 * 24)) / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconds = value % 60;

    // Return the formatted string
    return `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
};

const CountDown = () => {
    return (
        <div>
            <div>
                <Row gutter={16}>

                    <Col
                        span={24}
                        style={{
                            marginTop: 4,
                        }}
                    >
                        <Countdown title="Count Down" value={deadline} formatter={customFormatter} />
                    </Col>

                </Row>
            </div>
        </div>
    )
}

export default CountDown