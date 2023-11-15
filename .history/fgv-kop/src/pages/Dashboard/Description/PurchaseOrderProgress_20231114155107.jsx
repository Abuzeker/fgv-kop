import { Card, Col, Row, Badge, Descriptions, Typography, Space, Progress, Divider } from 'antd'
import React from 'react'
import BarchartWithColor from '../Graph/BarchartWithColor';
import TimelineDetail from './TimelineDetail';
import CountDown from './CountDown';
import Orderdetail from './Orderdetail';
import LineWithSegment from '../Graph/LineWithSegment';
import OrderProgress from './OrderProgress';
import DualaxisBar from '../Graph/DualaxisBar';

const { Paragraph } = Typography;
const twoColors = { '0%': '#108ee9', '100%': '#87d068' };

const PurchaseOrderProgress = () => {
    return (
        <div style={{ marginTop: '0px', marginBottom: '25px', padding: '0 0px' }}>
            <div>
                <Row gutter={[15, 10]} align={'top'}>
                    <Col span={24}>
                        <Card>
                            <Row gutter={[10, 10]}>
                                <Col span={24}>
                                    <Row gutter={[10, 0]}>
                                        <Col span={8}>
                                            <Orderdetail />
                                        </Col>
                                        <Col span={16}>
                                            <OrderProgress Period={5} />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={24}>
                                    {/* <Card style={{ fill: 'ActiveBorder', background: 'rgba(247, 247, 247, 0.8)', height: '600px' }}> */}
                                    {/* <span style={{ fontWeight: 'bold', fontSize: '20px' }}>
                                            Order Timeline
                                        </span> */}
                                    {/* <LineWithSegment containername={'sds'} /> */}
                                    <Row gutter={[10, 10]}>
                                        <Col span={12}>
                                            <Card style={{ fill: 'ActiveBorder', background: 'rgba(247, 247, 247, 0.8)', height: '500px' }}>
                                                <span style={{ fontWeight: 'bold', fontSize: '20px' }}>
                                                    Order Timeline
                                                </span>
                                                <TimelineDetail />
                                            </Card>

                                        </Col>

                                        <Col span={12}>
                                            <Card style={{ fill: 'ActiveBorder', background: 'rgba(247, 247, 247, 0.8)', height: '500px' }}>
                                                <span style={{ fontWeight: 'bold', fontSize: '20px' }}>
                                                    Daily Production
                                                </span>
                                                <BarchartWithColor containername={'54d7'} />
                                            </Card>

                                        </Col>
                                    </Row>
                                    {/* <TimelineDetail /> */}

                                    {/* </Card> */}
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Row gutter={[10, 10]}>
                                <Col span={24}>
                                    <Card style={{ fill: 'ActiveBorder', background: 'rgba(247, 247, 247, 0.8)' }}>
                                        <LineWithSegment containername={'sdsddd'} />

                                    </Card>

                                </Col>
                                {/* <Divider></Divider> */}
                                <Col span={24}>
                                    <Card style={{ fill: 'ActiveBorder', background: 'rgba(247, 247, 247, 0.8)' }}>

                                        <BarchartWithColor containername={'547'} />
                                        {/* <DualaxisBar containername={'sdsdfgg'}/> */}
                                    </Card>
                                </Col>

                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default PurchaseOrderProgress