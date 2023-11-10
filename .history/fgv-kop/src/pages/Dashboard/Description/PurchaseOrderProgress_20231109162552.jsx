import { Card, Col, Row, Badge, Descriptions, Typography } from 'antd'
import React from 'react'
import BarchartWithColor from '../Graph/BarchartWithColor';
import TinyProgress from '../Graph/TinyProgress';
import DualaxisBar from '../Graph/DualaxisBar';
import TimelineDetail from './TimelineDetail';
import ProgressRing from '../Graph/ProgressRing';
import CountDown from './CountDown';

const { Paragraph } = Typography;

const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Buyer',
      children: 'empty',
    },
    {
      key: '2',
      label: 'Vessel',
      children: 'empty',
    },
    {
      key: '3',
      label: 'Product',
      children: 'empty',
    },
    {
      key: '4',
      label: 'Layer',
      children: 'empty',
    },
    {
      key: '5',
      label: 'Order Quantity',
      children: 'empty',
    },

    {
        key: '5',
        label: 'Order Date',
        children: 'empty',
    },

      {
        key: '5',
        label: 'Delivery Date',
        children: 'empty',
    },
  ];



const PurchaseOrderProgress = () => {
    return (
        <div style={{ marginTop: '0px', marginBottom: '25px', padding: '0 50px' }}>
            <Card>
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
                                    <Descriptions title="User Info" items={items} />
                                        {/* <div>
                                            <span>Buyer: ABC</span>
                                            <br />

                                            <span>Vessel: ABC</span>
                                            <br />

                                            <span>Product: ABC</span>
                                            <br />

                                            <span>Layer: ABC</span>
                                            <br />

                                            <span>Order Date: 1/1/2023</span>
                                            <br />

                                            <span>Delivery Day: 8/1/2023</span>
                                            <br />

                                            <span>Order Quantity: 10 MT</span>
                                            <br />

                                            <span>Target Production Rate: 1 MT/Day</span>
                                            <br />
                                        </div> */}
                                    </Col>

                                    <Col span={12}>
                                        <ProgressRing containername={'tii'} />
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


            </Card>
        </div>
    )
}

export default PurchaseOrderProgress