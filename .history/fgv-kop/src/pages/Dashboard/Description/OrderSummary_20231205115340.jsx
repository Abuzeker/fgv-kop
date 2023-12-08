import { Card, Col, Row } from 'antd'
import React from 'react'
import { InfoCircleOutlined } from '@ant-design/icons'
import TinyProgressOrder from '../Graph/TinyProgressOrder'



const OrderSummary = (props) => {
    return (
        <div>
            <Row gutter={[10, 10]}>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card style={{ height: '170px', width: '170px', background: '#706f6f', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <div>
                            <Row gutter={16} align={'middle'}>

                                <Col span={24} align={'middle'}>
                                    <span style={{ fontSize: '15px', color: 'white' }}>Vessel: b2</span>
                                    <br />
                                    <span style={{ fontSize: '11px' }}>

                                        <InfoCircleOutlined />
                                        <span> 10/11/2023</span>
                                    </span>
                                </Col>
                                <Col span={24} align={'middle'}>
                                    {/* <span style={{ fontSize: '15px', color: 'white' }}>Vessel: b2 </span> */}
                                    <TinyProgressOrder containername={'sdd'} />
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