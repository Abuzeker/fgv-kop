import { Card, Col, Row, Badge, Descriptions, Typography, Space, Progress } from 'antd'
import React from 'react'
import BarchartWithColor from '../Graph/BarchartWithColor';
import TinyProgress from '../Graph/TinyProgress';
import DualaxisBar from '../Graph/DualaxisBar';
import TimelineDetail from './TimelineDetail';
import ProgressRing from '../Graph/ProgressRing';
import CountDown from './CountDown';
import Orderdetail from './Orderdetail';
import BarProgress from '../Graph/BarProgress';
import LineWithSegment from '../Graph/LineWithSegment';

const { Paragraph } = Typography;

const PurchaseOrderProgress = () => {
    return (
        <div style={{ marginTop: '0px', marginBottom: '25px', padding: '0 50px' }}>
            <Card>
                <Row gutter={[15, 10]}>
                    <Col span={12}>
                        <Card>
                            <Row gutter={[10, 10]}>
                                <Col span={24}>
                                    <Orderdetail />
                                </Col>
                                <Col span={24}>
                                    <Card>
                                        {/* <LineWithSegment containername={'sds'} /> */}
                                        <TimelineDetail/>

                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <LineWithSegment containername={'sdsddd'} />
                            {/* <TimelineDetail/> */}
                        </Card>
                    </Col>
                </Row>
            </Card>

        </div>
    )
}

export default PurchaseOrderProgress