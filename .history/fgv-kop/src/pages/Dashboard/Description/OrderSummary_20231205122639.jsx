import { Card, Col, Progress, Row } from 'antd'
import React from 'react'
import { InfoCircleOutlined } from '@ant-design/icons'
import TinyProgressOrder from '../Graph/TinyProgressOrder'



const OrderSummary = (props) => {
    const twoColors = { '0%': '#108ee9', '100%': '#87d068' };
    console.log(props.info);

    return (
        <div>

                <Col span={6} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card style={{ height: '200px', width: '200px', background: '#706f6f', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <div>
                            <Row gutter={[16,10]} align={'middle'}>

                                <Col span={24} align={'middle'}>
                                    <span style={{ fontSize: '18px', color: 'white' }}>Vessel: b2</span>
                                    <br />
                                    <span style={{ fontSize: '15px' }}>
                                        <InfoCircleOutlined />
                                        <span> 10/11/2023</span>
                                    </span>
                                </Col>
                                <Col span={24} align={'middle'}>
                                    {/* <span style={{ fontSize: '15px', color: 'white' }}>Vessel: b2 </span> */}
                                    <Progress type="circle" percent={90} strokeColor={twoColors} size={[75,37.5]}/>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

        </div>
    )
}

export default OrderSummary