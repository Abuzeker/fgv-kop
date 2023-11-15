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

const { Paragraph } = Typography;
const twoColors = { '0%': '#108ee9', '100%': '#87d068' };

const PurchaseOrderProgress = () => {
    return (
        <div style={{ marginTop: '0px', marginBottom: '25px', padding: '0 0px',                    backgroundColor: '#00000',
        opacity:0.6 }}>
            <div>
                <Row gutter={[15, 10]} align={'top'}>
                    <Col span={12}>
                        <Divider orientation='left'>Order Detail</Divider>

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
                                            <Card style={{ fill: 'ActiveBorder', background: 'rgba(247, 247, 247, 0.8)', height: '620px' }}>
                                                <div style={{ marginBottom: '20px' }}>

                                                    <span style={{ fontWeight: 'bold', fontSize: '20px' }}>
                                                        Order Timeline
                                                    </span>
                                                </div>
                                                <TimelineDetail />
                                            </Card>

                                        </Col>

                                        <Col span={12}>
                                            <Card style={{ fill: 'ActiveBorder', background: 'rgba(247, 247, 247, 0.8)', height: '620px' }}>
                                                <div style={{ marginBottom: '20px' }}>

                                                    <span style={{ fontWeight: 'bold', fontSize: '20px' }}>
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
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Divider orientation='left'>Purchased Order Summary</Divider>

                        <Card>
                            <Row gutter={[10, 10]}>
                                <Col span={24}>
                                    <Card style={{ fill: 'ActiveBorder', background: 'rgba(247, 247, 247, 0.8)' }}>
                                        <span style={{ fontWeight: 'bold', fontSize: '20px' }}>
                                            Daily Production Rate
                                        </span>
                                        <LineWithSegment containername={'sdsddd'} />

                                    </Card>

                                </Col>
                                {/* <Divider></Divider> */}
                                <Col span={24}>
                                    <Card style={{ fill: 'ActiveBorder', background: 'rgba(247, 247, 247, 0.8)' }}>
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
                        </Card>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default PurchaseOrderProgress