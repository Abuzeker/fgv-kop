import { Card, Col, Divider, Row, Space, Statistic } from 'antd'
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
                        <CountDown Period={Period} />
                    </Col>
                    <Divider />
                    <Col span={24}>
                        <Col span={24}>
                            <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                                <Space direction="horizontal" size={40} style={{ display: 'flex' }} >

                                    <Statistic
                                    // valueStyle={{fontSize:'0px'}}
                                        title="Produced"
                                        value={'0.8'}
                                        suffix={<span style={{ fontSize: '10px' }}>MT</span>}
                                    />
                                    <Statistic
                                        title="Remaining"
                                        value={'9.2'}
                                        suffix={<span style={{ fontSize: '10px' }}>MT</span>}
                                    />
                                    <Statistic
                                        title="Target Daily Production"
                                        value={'1.3'}
                                        suffix={<span style={{ fontSize: '10px' }}>MT/Day</span>}
                                    />
                                </Space>

                                <Space direction="horizontal" size={40} style={{ display: 'flex' }}>
                                    <Statistic
                                                                            valueStyle={{ fontSize: '10px' }}

                                        title="Est. Completion Date"
                                        value={'12th Jan 2023'}
                                    />
                                </Space>
                            </Space>
                        </Col>




                    </Col>

                </Row>
            </Card>
        </div>
    )
}

export default OrderProgress

