import { Card, Col, Row, Badge, Descriptions, Typography } from 'antd'
import React from 'react'
import BarchartWithColor from '../Graph/BarchartWithColor';
import TinyProgress from '../Graph/TinyProgress';
import DualaxisBar from '../Graph/DualaxisBar';
import TimelineDetail from './TimelineDetail';
import ProgressRing from '../Graph/ProgressRing';
import CountDown from './CountDown';
import Orderdetail from './Orderdetail';

const { Paragraph } = Typography;

const PurchaseOrderProgress = () => {
    return (
        <div style={{ marginTop: '0px', marginBottom: '25px', padding: '0 50px' }}>
            <Row gutter={[10, 10]}>
                <Col span={24}>
                    {/* <Typography.Title
                            level={2}
                            style={{
                                margin: 0,
                                textAlign: 'center'
                            }}
                        >
                            Production Efficiency
                        </Typography.Title> */}

                    {/* <Paragraph>
                            asdasd
                        </Paragraph> */}
                    <Card>
                        {/* <div>
                                <CountDown />
                            </div> */}

                        <Card style={{ marginTop: '10px' }}>
                            <Row>
                                <Col span={12}>
                                    <Card>
                                        <Row align={'middle'}>
                                            <Col span={12}>
                                                <Orderdetail />
                                            </Col>
                                            <Col span={12}>
                                                <ProgressRing containername={'tii'} />
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>

                                <Col span={12}>
                                </Col>
                            </Row>

                        </Card>
                    </Card>

                    <Card>
                        <DualaxisBar containername={'sds'} />
                    </Card>
                </Col>

                {/* <Col span={12}>
                        <Card bordered={true}>
                            <Typography.Title
                                level={3}
                                style={{
                                    margin: 0,
                                    textAlign: 'center'
                                }}
                            >
                                Order Time-line
                            </Typography.Title>
                            <div style={{ marginTop: '20px' }}>
                                <TimelineDetail />

                            </div>
                        </Card>
                    </Col> */}
            </Row>


        </div>
    )
}

export default PurchaseOrderProgress