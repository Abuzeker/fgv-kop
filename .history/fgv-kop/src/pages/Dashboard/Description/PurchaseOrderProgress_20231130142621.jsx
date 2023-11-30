import { Card, Col, Row, Badge, Descriptions, Typography, Space, Progress, Divider, Carousel } from 'antd'
import React from 'react'
import BarchartWithColor from '../Graph/BarchartWithColor';
import TimelineDetail from './TimelineDetail';
import Orderdetail from './Orderdetail';
import LineWithSegment from '../Graph/LineWithSegment';
import OrderProgress from './OrderProgress';
import MultiBar from '../Graph/MultiBar';

const dataArray = [1, 2, 3];


const orders = (index) => {
    return (
        <div>
            <Row gutter={[10, 10]}>
                <Col span={24}>
                    <Row gutter={[10, 10]}>
                        <Col span={8} xs={24} lg={8}>
                            <Orderdetail />
                        </Col>
                        <Col span={16} xs={24} lg={16}>
                            <OrderProgress Period={5} />
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Row gutter={[10, 10]}>
                        <Col span={12} xs={24} lg={12}>
                            <Card style={{ fill: 'ActiveBorder', background: '#706f6f', color: 'white', height: '620px' }}>
                                <div style={{ marginBottom: '20px' }}>
                                    <span style={{ fontWeight: 'bold', fontSize: '20px' }}>
                                        Order Timeline
                                    </span>
                                </div>
                                <TimelineDetail />
                            </Card>
                        </Col>
                        <Col span={12} xs={24} lg={12}>
                            <Card style={{ fill: 'ActiveBorder', background: '#706f6f', height: '620px' }}>
                                <div style={{ marginBottom: '20px' }}>
                                    <span style={{ fontWeight: 'bold', fontSize: '20px', color: 'white' }}>
                                        Daily Production
                                    </span>
                                </div>
                                <BarchartWithColor containername={`chart-${index}`} />
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};




const PurchaseOrderProgress = () => {
    return (
        <div style={{}}>
            <Row gutter={[15, 10]} align={'top'}>
                <Col xs={24} lg={12}>
                    <Divider orientation='left' style={{ color: 'white', borderColor: 'white' }}>Order Detail</Divider>
                    <Carousel>
                        {dataArray.map((element, index) => (
                            <div key={index}>
                                {orders(element)}
                            </div>
                        ))}
                    </Carousel>
                </Col>


                {/* seperation different carosoul*/}
                <Col span={12} xs={24} lg={12}>
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