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
            <Card>
                <Row  gutter={[15, 10]}>
                    <Col span={12}>
                        <Card>
                            <Orderdetail />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <DualaxisBar containername={'sds'} />
                        </Card>
                    </Col>
                </Row>
            </Card>

        </div>
    )
}

export default PurchaseOrderProgress