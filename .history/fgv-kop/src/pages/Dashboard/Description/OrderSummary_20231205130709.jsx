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
                <Card style={{ height: '300px', width: '270px', background: '#706f6f', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                    <Row gutter={[16, 10]} align={'middle'}>
                        <Col span={24} align={'middle'}>
                            <span style={{ fontSize: '30px', color: 'white', fontStyle: 'oblique' }}>Vessel: {orderinfo.Vessel}</span>
                            <br />
                            <span style={{ fontSize: '15px' }}>
                                <InfoCircleOutlined />
                                <span> {orderinfo.Laycan[0]}</span>
                            </span>
                            <div style={{ marginBottom: '10px' }} />
                            {orderinfo.Products.map((element, index) => (
                                <Tag key={index} color='red' style={{fontSize:'10px'}}>
                                    {element}
                                </Tag>
                            ))}
                        </Col>
                        <Col span={24} align={'middle'}>
                            {/* <span style={{ fontSize: '15px', color: 'white' }}>Vessel: b2 </span> */}
                            <Progress type="circle" percent={orderinfo['Attainment Rate']} strokeColor={twoColors}
                                size={[150, 75]} strokeWidth={10}
                                format={() => (
                                    <span style={{ color: 'white' }}>{orderinfo['Attainment Rate']}%</span>
                                )} />
                        </Col>
                    </Row>
                </Card>
            </Col>

        </div>
    )
}

export default OrderSummary