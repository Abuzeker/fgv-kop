import { Card, Col, Row, Badge, Descriptions, Typography, Space, Progress } from 'antd'
import React from 'react'
import BarchartWithColor from '../Graph/BarchartWithColor';
import TimelineDetail from './TimelineDetail';
import CountDown from './CountDown';
import Orderdetail from './Orderdetail';
import LineWithSegment from '../Graph/LineWithSegment';
import OrderProgress from './OrderProgress';

const { Paragraph } = Typography;
const twoColors = { '0%': '#108ee9', '100%': '#87d068' };

const PurchaseOrderProgress = () => {
    return (
        <div style={{ marginTop: '0px', marginBottom: '25px', padding: '0 0px' }}>
            <Card>
                <Row gutter={[15, 10]} align={'top'}>
                    <Col span={12}>
                        <Card>
                            <Row gutter={[10, 10]}>
                                <Col span={24}>
                                    <Row gutter={[10, 0]}>
                                        <Col span={8}>
                                            <Orderdetail />
                                        </Col>
                                        <Col span={16}>
                                            <OrderProgress Period={5}/>
                                        </Col>
                                    </Row>

                                    <Card style={{ marginTop: '5px', background: 'rgba(247, 247, 247, 0.8)' }}>
                                        <span>Order Progress</span>
                                        <Progress percent={70.9} strokeColor={twoColors} size={'large'} strokeWidth={15} />
                                    </Card>
                                </Col>
                                <Col span={24}>
                                    <Card>
                                        <LineWithSegment containername={'sds'} />
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            {/* <LineWithSegment containername={'sdsddd'} /> */}
                            <TimelineDetail />
                        </Card>
                    </Col>
                </Row>
            </Card>

        </div>
    )
}

export default PurchaseOrderProgress