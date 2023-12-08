import { Card, Col, Row } from 'antd'
import React from 'react'
import TinyProgress from '../Graph/TinyProgress'
import { InfoCircleOutlined } from '@ant-design/icons'



const OrderSummary = () => {
    return (
        <div>
            <Row gutter={[10, 10]}>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card style={{ height: '190px', background: '#706f6f', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}>MTD CPO </span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>10.2 MT</span>
                                    <br />
                                    <span style={{ fontSize: '11px' }}>
                                        <InfoCircleOutlined />
                                        <span> 20 Days Remaining</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyProgress containername={'cpotinyprogress'} />
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
                </Row>

        </div>
    )
}

export default OrderSummary