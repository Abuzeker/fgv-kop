import { Card, Col, Row, Space, Statistic } from 'antd'
import React from 'react'
import CountDown from './CountDown'


const OrderProgress = ({ Period }) => {

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
                        <CountDown Period={5}/>
                    </Col>

                    <Col span={24}>
                        <Space direction="horizontal" size="small" style={{ display: 'flex' }}>
                            <Space direction="vertical" size="small" style={{ display: 'flex', marginRight:'20px' }}>
                                <Statistic title="Quantity Produced" value={'0.8'} suffix={'MT'} />
                                <Statistic title="Quantity Remaining" value={'9.2'} suffix={'MT'} />
                            </Space>

                            <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                                <Statistic title="Quantity Produced" value={'0.8'} suffix={'MT'} />
                                <Statistic title="Quantity Remaining" value={'9.2'} suffix={'MT'} />
                            </Space>
                        </Space>
                    </Col>

                </Row>
            </Card>
        </div>
    )
}

export default OrderProgress

