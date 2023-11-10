import { Card, Col, Row, Space, Statistic } from 'antd'
import React from 'react'


const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

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
                        <Countdown title="Time Remaining" value={deadline} format="D [Days] H[:] m[:] s " />
                    </Col>

                    <Col span={24}>
                        <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                            <Statistic title="Quantity Produced" value={'0.8'} suffix={'MT'} />
                            <Statistic title="Quantity Remaining" value={'9.2'} suffix={'MT'} />
                        </Space>
                    </Col>

                </Row>
            </Card>
        </div>
    )
}

export default CountDown