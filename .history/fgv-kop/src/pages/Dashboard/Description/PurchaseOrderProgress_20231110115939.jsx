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

const { Paragraph } = Typography;

const PurchaseOrderProgress = () => {
    return (
        <div style={{ marginTop: '0px', marginBottom: '25px', padding: '0 50px' }}>
            <Row gutter={[10, 10]}>
                <Col span={24}>
                    <Card style={{ marginTop: '10px' }}>
                        <Row gutter={[10, 10]}>
                            <Col span={12}>
                                <Row align={'middle'} gutter={[10, 10]}>
                                    <Col span={12}>
                                        <Orderdetail />
                                    </Col>
                                    <Col span={12}>
                                        <DualaxisBar containername={'sds'} />
                                    </Col>
                                    <Col span={8}>
                                        {/* <Orderdetail /> */}

                                    </Col>
                                </Row>
                            </Col>

                            <Col span={12}>
                            </Col>
                        </Row>

                    </Card>
                </Col>

            </Row>


        </div>
    )
}

export default PurchaseOrderProgress