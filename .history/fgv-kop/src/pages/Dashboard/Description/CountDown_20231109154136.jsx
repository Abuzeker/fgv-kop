import { Col, Row, Statistic } from 'antd'
import React from 'react'


const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK
console.log(deadline);



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
                        <Countdown title="Count Down" value={deadline} format="D 天 H 时 m 分 s 秒" />
                    </Col>

                </Row>
            </div>
        </div>
    )
}

export default CountDown