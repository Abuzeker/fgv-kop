import { Card, Col, Progress, Row, Space, Tag } from 'antd'
import React from 'react'
import { InfoCircleOutlined } from '@ant-design/icons'
import TinyProgressOrder from '../Graph/TinyProgressOrder'



const OrderSummary = (props) => {
    const twoColors = { '0%': '#108ee9', '100%': '#87d068' };
    const orderinfo = props.info
    console.log(props.info);

    return (
        <div>

            <Col span={6} xs={24} sm={12} md={12} lg={8} xl={4}>
                <Card style={{ height: '300px', width: '300px', background: '#706f6f', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                    <div>
                        <Row gutter={[16, 10]} align={'middle'}>

                            <Col span={24} align={'middle'}>
                                <span style={{ fontSize: '18px', color: 'white' }}>Vessel: {orderinfo.Vessel}</span>
                                <br/>
                                <br/>

                                <Space direction="horizontal" size={[10,0]} style={{ display: 'flex' }}>
                                    {orderinfo.Products.map((element, index) => (
                                        <Tag key={index} color='red'>
                                            {element}
                                        </Tag>
                                    ))}
                                </Space>
                                <br/>
                                <span style={{ fontSize: '15px' }}>
                                    <InfoCircleOutlined />
                                    <span> {orderinfo.Laycan[0]}</span>
                                </span>
                            </Col>
                            <Col span={24} align={'middle'}>
                                {/* <span style={{ fontSize: '15px', color: 'white' }}>Vessel: b2 </span> */}
                                <Progress type="circle" percent={orderinfo['Attainment Rate']} strokeColor={twoColors} size={[100, 50]} strokeWidth={10} />
                            </Col>
                        </Row>
                    </div>
                </Card>
            </Col>

        </div>
    )
}

export default OrderSummary