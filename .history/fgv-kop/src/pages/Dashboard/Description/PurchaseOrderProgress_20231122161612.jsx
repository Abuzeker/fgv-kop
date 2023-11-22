import { Card, Col, Row, Badge, Descriptions, Typography, Space, Progress, Divider } from 'antd'
import React from 'react'
import BarchartWithColor from '../Graph/BarchartWithColor';
import TimelineDetail from './TimelineDetail';
import CountDown from './CountDown';
import Orderdetail from './Orderdetail';
import LineWithSegment from '../Graph/LineWithSegment';
import OrderProgress from './OrderProgress';
import DualaxisBar from '../Graph/DualaxisBar';
import UtilizationGraph from '../Graph/UtilizationGraph';
import MultiBar from '../Graph/MultiBar';
import LineWithThreshold from '../Graph/LineWithThreshold';

const { Paragraph } = Typography;
const twoColors = { '0%': '#108ee9', '100%': '#87d068' };

const PurchaseOrderProgress = () => {
    return (
        <div style={{  }}>
                <Row gutter={[15, 10]} align={'top'}>
                    <Col span={12} sm={24}>
                    <Divider orientation='left' style={{ color: 'white', borderColor: 'white' }}>Order Detail</Divider>

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
                                            <Card style={{ fill: 'ActiveBorder', background: '#706f6f', color: 'white', height: '620px' }}>
                                                <div style={{ marginBottom: '20px' }}>

                                                    <span style={{ fontWeight: 'bold', fontSize: '20px' }}>
                                                        Order Timeline
                                                    </span>
                                                </div>
                                                <TimelineDetail />
                                            </Card>

                                        </Col>

                                        <Col span={12}>
                                            <Card style={{ fill: 'ActiveBorder', background: '#706f6f', height: '620px' }}>
                                                <div style={{ marginBottom: '20px' }}>

                                                    <span style={{ fontWeight: 'bold', fontSize: '20px',color:'white' }}>
                                                        Daily Production
                                                    </span>
                                                </div>

                                                <BarchartWithColor containername={'54d7'} />
                                            </Card>

                                        </Col>
                                    </Row>
                                    {/* <TimelineDetail /> */}

                                    {/* </Card> */}
                                </Col>
                            </Row>
                    </Col>
                    <Col span={12}>
                    <Divider orientation='left' style={{ color: 'white', borderColor: 'white' }}>PO Summary</Divider>

                            <Row gutter={[10, 10]}>
                                <Col span={24}>
                                    <Card style={{ fill: 'ActiveBorder', background: '#706f6f', }}>
                                        <span style={{ fontWeight: 'bold', fontSize: '20px' }}>
                                            Daily Production Rate
                                        </span>
                                        <LineWithSegment containername={'sdsddd'} />

                                    </Card>

                                </Col>
                                {/* <Divider></Divider> */}
                                <Col span={24}>
                                    <Card style={{ fill: 'ActiveBorder', background: '#706f6f', }}>
                                    <div style={{ marginBottom: '20px' }}>

                                        <span style={{ fontWeight: 'bold', fontSize: '20px' }}>
                                            Order Effciency
                                        </span>
                                        </div>

                                        {/* <BarchartWithColor containername={'547'} /> */}
                                        {/* <DualaxisBar containername={'sdsdfgg'}/> */}
                                        <MultiBar containername={'ser'} />
                                    </Card>
                                </Col>

                            </Row>
                    </Col>
                </Row>
        </div>
    )
}

export default PurchaseOrderProgress