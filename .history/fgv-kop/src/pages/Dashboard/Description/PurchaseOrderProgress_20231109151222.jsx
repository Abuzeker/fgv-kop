import { Card, Col, Row, Badge, Descriptions, Typography, Divider } from 'antd'
import React from 'react'
import BarchartWithColor from '../Graph/BarchartWithColor';
import TinyProgress from '../Graph/TinyProgress';
import DualaxisBar from '../Graph/DualaxisBar';
import TimelineDetail from './TimelineDetail';
import ProgressRing from '../Graph/ProgressRing';

const { Paragraph } = Typography;

const items = [
    {
        key: '1',
        label: 'Buyer',
        children: 'ABV',
    },
    {
        key: '2',
        label: 'Vessel',
        children: 'acb12345',
    },
    {
        key: '3',
        label: 'Product',
        children: 'CPO 213',
    },
    {
        key: '4',
        label: 'Order time',
        children: '2018-04-24 18:00:00',
    },
    {
        key: '5',
        label: 'Usage Time',
        children: '2019-04-24 18:00:00',
        span: 2,
    },
    {
        key: '6',
        label: 'Status',
        children: <Badge status="processing" text="Running" />,
        span: 3,
    },
    {
        key: '7',
        label: 'Negotiated Amount',
        children: '$80.00',
    },
    {
        key: '8',
        label: 'Discount',
        children: '$20.00',
    },
    {
        key: '9',
        label: 'Official Receipts',
        children: '$60.00',
    },
    {
        key: '10',
        label: 'Config Info',
        children: (
            <>
                Data disk type: MongoDB
                <br />
                Database version: 3.4
                <br />
                Package: dds.mongo.mid
                <br />
                Storage space: 10 GB
                <br />
                Replication factor: 3
                <br />
                Region: East China 1
                <br />
            </>
        ),
    },
];

const PurchaseOrderProgress = () => {
    return (
        <div style={{ marginTop: '25px', marginBottom: '25px', padding: '0 50px' }}>
            <Card>
                <Row gutter={[10, 10]}>
                    <Col span={16}>
                        <Row gutter={[10, 10]}>
                            <Col span={24}>
                                <div style={{ marginBottom: '10px' }} bordered={false}>
                                    <Typography.Title
                                        level={4}
                                        style={{
                                            margin: 0,
                                            textAlign: 'center'
                                        }}
                                    >
                                        Production Efficiency
                                    </Typography.Title>

                                    <div style={{ marginTop: '10px' }}>
                                        <ProgressRing containername={'tii'} />

                                    </div>

                                </div>
                                <Card>
                                    <DualaxisBar containername={'sds'} />
                                </Card>
                            </Col>

                        </Row>
                    </Col>

                    <Col span={8}>
                        <Divider type="vertical"></Divider>
                        <Card>
                            <TimelineDetail />
                        </Card>
                    </Col>
                </Row>


            </Card>
        </div>
    )
}

export default PurchaseOrderProgress