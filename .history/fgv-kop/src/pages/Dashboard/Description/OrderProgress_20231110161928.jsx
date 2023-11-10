import { Card, Col, Divider, Progress, Row, Space, Statistic } from 'antd'
import React from 'react'
import CountDown from './CountDown'
import { CheckCircleFilled, CheckCircleOutlined } from '@ant-design/icons'
const twoColors = { '0%': '#108ee9', '100%': '#87d068' };


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
                                        title="Target Daily Rate"
                                        value={'1.3'}
                                        suffix={<span style={{ fontSize: '10px' }}>MT/Day</span>}
                                    />
                                </Space>

                                <Space direction="horizontal" size={40} style={{ display: 'flex' }}>
                                    <Statistic
                                        valueStyle={{ fontSize: '15px' }}
                                        title="Est. Completion Date"
                                        value={'12/1/2023'}
                                    />

                                    <Statistic
                                        valueStyle={{ fontSize: '15px' }}
                                        title="Status"
                                        value={'Ahead by 2 days from the delivery date'}
                                        prefix={<CheckCircleFilled style={{ color: 'green' }} />}
                                    />
                                </Space>
                                        <span>Order Progress</span>
                                        <Progress percent={70.9} strokeColor={twoColors} size={'large'} strokeWidth={15} />
                            </Space>
                        </Col>




                    </Col>

                </Row>
            </Card>
        </div>
    )
}

export default OrderProgress

