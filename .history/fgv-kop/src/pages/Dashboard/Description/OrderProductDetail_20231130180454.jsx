import { Col, Divider, Progress, Row, Space, Statistic } from 'antd'
import React from 'react'

import { CheckCircleFilled, CheckCircleOutlined } from '@ant-design/icons'
const twoColors = { '0%': '#108ee9', '100%': '#87d068' };


const OrderProductDetail = () => {
    const customFormat = percent => (<span style={{ color: 'white' }}>{percent}%</span>)

    return (
        <div>
            <Row gutter={16}>



                <Divider orientation='left' style={{ color: 'white', borderColor: 'white' }}></Divider>
                <Col span={24}>
                    <Space direction="vertical" size="small" style={{ display: 'flex', color: 'white' }}>

                        <Row gutter={[10, 10]}>

                            <Col span={8}>
                                <Statistic
                                    valueStyle={{ color: 'white' }}
                                    title={<span style={{ color: 'white' }}>Produced </span>}
                                    value={'0.8'}
                                    suffix={<span style={{ fontSize: '10px', color: 'white' }}>MT</span>}
                                />
                            </Col>

                            <Col span={8}>
                                <Statistic
                                    valueStyle={{ color: 'white' }}
                                    title={<span style={{ color: 'white' }}>Remaining </span>}
                                    value={'9.2'}
                                    suffix={<span style={{ fontSize: '10px', color: 'white' }}>MT</span>}
                                />
                            </Col>

                            <Col span={8}>
                                <Statistic
                                    valueStyle={{ color: 'white' }}
                                    title={<span style={{ color: 'white' }}>Today Target </span>}
                                    value={'1.3'}
                                    suffix={<span style={{ fontSize: '10px', color: 'white' }}>MT/Day</span>}
                                />
                            </Col>
                        </Row>

                        <Space direction="horizontal" size={40} style={{ display: 'flex', color: 'white' }}>
                            <Statistic
                                valueStyle={{ fontSize: '17px', fontWeight: 600, color: 'white' }}
                                title={<span style={{ color: 'white' }}>Est. Completion Date</span>}
                                value={'12/1/2023'}
                            />

                            <Statistic
                                valueStyle={{ fontSize: '15px', color: 'white' }}
                                title={<span style={{ color: 'white' }}>Overall Efficiency</span>}
                                value={'79'}
                                suffix={'%'}
                                prefix={<CheckCircleFilled style={{ color: 'white' }} />}
                            />
                        </Space>

                        <div style={{ paddingTop: '5px', fontWeight: 'bold', padding: ' 10px 0px 0px 0px' }}>
                            <span style={{ fontSize: '15px', color: 'white' }}>Order Progress</span>
                            <Progress percent={70.9} strokeColor={twoColors} size={'large'} strokeWidth={15} format={customFormat} />
                        </div>

                    </Space>
                </Col>
            </Row>
        </div>
    )
}

export default OrderProductDetail