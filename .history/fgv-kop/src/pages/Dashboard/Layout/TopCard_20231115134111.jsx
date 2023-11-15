import React from 'react'
import TinyBar from '../Graph/TinyBar'
import { Card, Col, Row } from 'antd'
import TinyProgress from '../Graph/TinyProgress'
import { ArrowUpOutlined, InfoCircleOutlined } from '@ant-design/icons';

const cardStyle = {
    borderRadius: '20px 0 0 0', // Top-left border radius
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)', // Adjust shadow as needed
    
  };

const TopCard = () => {
    return (
        <div style={{ marginTop: '25px', padding: '0 0px' }}>
            <Row gutter={[10, 10]}>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card bordered={false} style={{ cardStyle }}>
                        <span style={{ fontSize: '20px',  color: 'white' }}>MTD CPO </span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px',  color: 'white'}}>10.2 MT</span>
                                    <br />
                                    <span style={{ fontSize: '11px' }}>
                                        <InfoCircleOutlined />
                                        <span> 20 Days Remaining</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyProgress containername={'cpotinyprogress'} />
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card bordered={false} style={{ height: '190px' }}>
                        <span style={{ fontSize: '20px' }}> CPO </span>
                        <span style={{ fontSize: '10px' }}>11/10/2023</span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: '#3f8600' }}>10.2 MT</span>
                                    <br />
                                    <span style={{ fontSize: '13px' }}>
                                        <ArrowUpOutlined />
                                        <span> 0.7 % MTD</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyBar containername={'cpotinybar'} />
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card bordered={false} style={{ height: '190px' }}>
                        <span style={{ fontSize: '20px' }}>MTD CPKO </span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: '#3f8600' }}>10.2 MT</span>
                                    <br />
                                    <span style={{ fontSize: '11px' }}>
                                        <InfoCircleOutlined />
                                        <span> 20 Days Remaining</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyProgress containername={'cpkotinyprogress'} />
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card bordered={false} style={{ height: '190px' }}>
                        <span style={{ fontSize: '20px' }}> CPKO </span>
                        <span style={{ fontSize: '10px' }}>11/10/2023</span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: '#3f8600' }}>10.2 MT</span>
                                    <br />
                                    <span style={{ fontSize: '13px' }}>
                                        <ArrowUpOutlined />
                                        <span> 0.7 % MTD</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyBar containername={'cpkotinybar'} />
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card bordered={false} style={{ height: '190px' }}>
                        <span style={{ fontSize: '20px' }}>MTD RBDPO </span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: '#3f8600' }}>10.2 MT</span>
                                    <br />
                                    <span style={{ fontSize: '11px' }}>
                                        <InfoCircleOutlined />
                                        <span> 20 Days Remaining</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyProgress containername={'rbdpotinyprogress'} />
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card bordered={false} style={{ height: '190px' }}>
                        <span style={{ fontSize: '20px' }}> RBDPO </span>
                        <span style={{ fontSize: '10px' }}>11/10/2023</span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: '#3f8600' }}>10.2 MT</span>
                                    <br />
                                    <span style={{ fontSize: '13px' }}>
                                        <ArrowUpOutlined />
                                        <span> 0.7 % MTD</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyBar containername={'rbdpotinybar'} />
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default TopCard