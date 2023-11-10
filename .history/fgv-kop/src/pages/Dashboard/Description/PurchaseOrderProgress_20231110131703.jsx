import { Card, Col, Row, Badge, Descriptions, Typography, Space, Progress } from 'antd'
import React from 'react'
import BarchartWithColor from '../Graph/BarchartWithColor';
import TimelineDetail from './TimelineDetail';
import CountDown from './CountDown';
import Orderdetail from './Orderdetail';
import LineWithSegment from '../Graph/LineWithSegment';

const { Paragraph } = Typography;
const twoColors = { '0%': '#108ee9', '100%': '#87d068' };

const PurchaseOrderProgress = () => {
    return (
        <div style={{ marginTop: '0px', marginBottom: '25px', padding: '0 50px' }}>
            <Card>
                <Row gutter={[15, 10]} align={'top'}>
                    <Col span={12}>
                        <Card>
                            <Row gutter={[10, 10]}>
                                <Col span={24}>
                                    <Row gutter={[10,0]}> 
                                        <Col span={12}>
                                            <Orderdetail />
                                        </Col>
                                        <Col span={12}>
                                            <Orderdetail />
                                        </Col>
                                    </Row>
                                    <Progress percent={70.9} strokeColor={twoColors} size={[100,200]}/>

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