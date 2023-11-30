import { Col, Divider, Progress, Row, Space, Statistic } from 'antd'
import React from 'react'

import { CheckCircleFilled, CheckCircleOutlined } from '@ant-design/icons'
const twoColors = { '0%': '#108ee9', '100%': '#87d068' };


const OrderProductDetail = () => {
    const customFormat = percent => (<span style={{ color: 'white' }}>{percent}%</span>)

    return (
        <div>
            <Row gutter={16}>
                <Col span={24}>
                    <div style={{ marginBottom: '5px' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '15px' }}>
                            RBDPO
                        </span>
                    </div>
                    <Space direction="vertical" size="small" style={{ display: 'flex', color: 'white' }}>

                        <Row gutter={[10, 10]}>

                            <Col span={8}>
                                <Statistic
                                    valueStyle={{ color: 'white', fontSize: '18px' }}
                                    title={<span style={{ color: 'white', fontSize: '13px' }}>Produced </span>}
                                    value={'0.8'}
                                    suffix={<span style={{ fontSize: '10px', color: 'white' }}>MT</span>}
                                />
                            </Col>

                            <Col span={8}>
                                <Statistic
                                    valueStyle={{ color: 'white', fontSize: '18px' }}
                                    title={<span style={{ color: 'white' }}>Remaining </span>}
                                    value={'9.2'}
                                    suffix={<span style={{ fontSize: '10px', color: 'white' }}>MT</span>}
                                />
                            </Col>

                            <Col span={8}>
                                <Statistic
                                    valueStyle={{ color: 'white', fontSize: '18px' }}
                                    title={<span style={{ color: 'white' }}>Today Target </span>}
                                    value={'1.3'}
                                    suffix={<span style={{ fontSize: '10px', color: 'white' }}>MT/Day</span>}
                                />
                            </Col>
                        </Row>

                        <div style={{ paddingTop: '5px', fontWeight: 'bold', padding: ' 5px 0px 0px 0px' }}>
                            <span style={{ fontSize: '12px', color: 'white' }}>Order Progress</span>
                            <Progress percent={70.9} strokeColor={twoColors} size={'small'} strokeWidth={8} format={customFormat} />
                        </div>

                    </Space>
                </Col>
            </Row>
            <div style={{ paddingBottom: '10px' }} ></div>

            <Row gutter={16}>
                <Col span={24}>
                <div style={{ marginBottom: '5px' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '15px' }}>
                            RBDPO
                        </span>
                    </div>
                    <Space direction="vertical" size="small" style={{ display: 'flex', color: 'white' }}>

                        <Row gutter={[10, 10]}>

                            <Col span={8}>
                                <Statistic
                                    valueStyle={{ color: 'white', fontSize: '18px' }}
                                    title={<span style={{ color: 'white' }}>Produced </span>}
                                    value={'0.8'}
                                    suffix={<span style={{ fontSize: '10px', color: 'white' }}>MT</span>}
                                />
                            </Col>

                            <Col span={8}>
                                <Statistic
                                    valueStyle={{ color: 'white', fontSize: '18px' }}
                                    title={<span style={{ color: 'white' }}>Remaining </span>}
                                    value={'9.2'}
                                    suffix={<span style={{ fontSize: '10px', color: 'white' }}>MT</span>}
                                />
                            </Col>

                            <Col span={8}>
                                <Statistic
                                    valueStyle={{ color: 'white', fontSize: '18px' }}
                                    title={<span style={{ color: 'white' }}>Today Target </span>}
                                    value={'1.3'}
                                    suffix={<span style={{ fontSize: '10px', color: 'white' }}>MT/Day</span>}
                                />
                            </Col>
                        </Row>

                        <div style={{ paddingTop: '5px', fontWeight: 'bold', padding: ' 5px 0px 0px 0px' }}>
                            <span style={{ fontSize: '12px', color: 'white' }}>Order Progress</span>
                            <Progress percent={70.9} strokeColor={twoColors} size={'small'} strokeWidth={8} format={customFormat} />
                        </div>

                    </Space>
                </Col>
            </Row>
            <div style={{ paddingBottom: '10px' }} ></div>

            <Row gutter={16}>
                <Col span={24}>
                <div style={{ marginBottom: '5px' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '15px' }}>
                            RBDPO
                        </span>
                    </div>
                    <Space direction="vertical" size="small" style={{ display: 'flex', color: 'white' }}>

                        <Row gutter={[10, 10]}>

                            <Col span={8}>
                                <Statistic
                                    valueStyle={{ color: 'white', fontSize: '18px' }}
                                    title={<span style={{ color: 'white' }}>Produced </span>}
                                    value={'0.8'}
                                    suffix={<span style={{ fontSize: '10px', color: 'white' }}>MT</span>}
                                />
                            </Col>

                            <Col span={8}>
                                <Statistic
                                    valueStyle={{ color: 'white', fontSize: '18px' }}
                                    title={<span style={{ color: 'white' }}>Remaining </span>}
                                    value={'9.2'}
                                    suffix={<span style={{ fontSize: '10px', color: 'white' }}>MT</span>}
                                />
                            </Col>

                            <Col span={8}>
                                <Statistic
                                    valueStyle={{ color: 'white', fontSize: '18px' }}
                                    title={<span style={{ color: 'white' }}>Today Target </span>}
                                    value={'1.3'}
                                    suffix={<span style={{ fontSize: '10px', color: 'white' }}>MT/Day</span>}
                                />
                            </Col>
                        </Row>

                        <div style={{ paddingTop: '5px', fontWeight: 'bold', padding: ' 5px 0px 0px 0px' }}>
                            <span style={{ fontSize: '12px', color: 'white' }}>Order Progress</span>
                            <Progress percent={70.9} strokeColor={twoColors} size={'small'} strokeWidth={8} format={customFormat} />
                        </div>

                    </Space>
                </Col>
            </Row>
            <div style={{ paddingBottom: '10px' }} ></div>

            <Row gutter={16}>
                <Col span={24}>
                <div style={{ marginBottom: '5px' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '15px' }}>
                            RBDPO
                        </span>
                    </div>
                    <Space direction="vertical" size="small" style={{ display: 'flex', color: 'white' }}>

                        <Row gutter={[10, 10]}>

                            <Col span={8}>
                                <Statistic
                                    valueStyle={{ color: 'white', fontSize: '18px' }}
                                    title={<span style={{ color: 'white' }}>Produced </span>}
                                    value={'0.8'}
                                    suffix={<span style={{ fontSize: '10px', color: 'white' }}>MT</span>}
                                />
                            </Col>

                            <Col span={8}>
                                <Statistic
                                    valueStyle={{ color: 'white', fontSize: '18px' }}
                                    title={<span style={{ color: 'white' }}>Remaining </span>}
                                    value={'9.2'}
                                    suffix={<span style={{ fontSize: '10px', color: 'white' }}>MT</span>}
                                />
                            </Col>

                            <Col span={8}>
                                <Statistic
                                    valueStyle={{ color: 'white', fontSize: '18px' }}
                                    title={<span style={{ color: 'white' }}>Today Target </span>}
                                    value={'1.3'}
                                    suffix={<span style={{ fontSize: '10px', color: 'white' }}>MT/Day</span>}
                                />
                            </Col>
                        </Row>

                        <div style={{ paddingTop: '5px', fontWeight: 'bold', padding: ' 5px 0px 0px 0px' }}>
                            <span style={{ fontSize: '12px', color: 'white' }}>Order Progress</span>
                            <Progress percent={70.9} strokeColor={twoColors} size={'small'} strokeWidth={8} format={customFormat} />
                        </div>

                    </Space>
                </Col>
            </Row>
        </div>
    )
}

export default OrderProductDetail