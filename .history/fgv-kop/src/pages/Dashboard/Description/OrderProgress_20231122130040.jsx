import { Card, Col, Divider, Progress, Row, Space, Statistic } from 'antd'
import React from 'react'
import CountDown from './CountDown'
import { CheckCircleFilled, CheckCircleOutlined } from '@ant-design/icons'
const twoColors = { '0%': '#108ee9', '100%': '#87d068' };


const OrderProgress = ({ Period }) => {

    return (
        <div>
            <Card style={{ background: '#706f6f', color: 'white' }}>

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
                                <Space direction="horizontal" size={80} style={{ display: 'flex' }} >

                                    <Statistic
                                        // valueStyle={{fontSize:'0px'}}
                                        title="Produced"
                                        value={'0.8'}
                                        suffix={<span style={{ fontSize: '10px',color: 'white' }}>MT</span>}
                                    />
                                    <Statistic
                                        title="Remaining"
                                        value={'9.2'}
                                        suffix={<span style={{ fontSize: '10px',color: 'white' }}>MT</span>}
                                    />
                                    <Statistic
                                        title="Today Target"
                                        value={'1.3'}
                                        suffix={<span style={{ fontSize: '10px',color: 'white' }}>MT/Day</span>}
                                    />
                                </Space>

                                <Space direction="horizontal" size={40} style={{ display: 'flex',color: 'white' }}>
                                    <Statistic
                                        valueStyle={{ fontSize: '17px', fontWeight:600,color: 'white' }}
                                        title="Est. Completion Date"
                                        value={'12/1/2023'}
                                    />

                                    <Statistic
                                        valueStyle={{ fontSize: '15px' }}
                                        title="Overall Efficiency"
                                        value={'79'}
                                        suffix={'%'}
                                        prefix={<CheckCircleFilled style={{ color: 'green' }} />}
                                    />
                                </Space>

                                <div style={{ paddingTop: '5px', fontWeight: 'bold', padding: ' 10px 0px 0px 0px' }}>
                                    <span style={{ fontSize: '15px'}}>Order Progress</span>
                                    <Progress percent={70.9} strokeColor={twoColors} size={'large'} strokeWidth={15} />
                                </div>

                            </Space>
                        </Col>




                    </Col>

                </Row>
            </Card>
        </div>
    )
}

export default OrderProgress

