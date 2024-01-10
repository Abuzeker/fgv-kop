import { Card, Col, Progress, Row, Space, Tag } from 'antd'
import React from 'react'
import { InfoCircleOutlined } from '@ant-design/icons'



const OrderSummary = (props) => {
    const twoColors = { '0%': '#108ee9', '100%': '#87d068' };
    const orderinfo = props.info

   const orderpercent = orderinfo['Attainment Rate']? orderinfo['Attainment Rate'] : '0'

    // console.log(orderpercent);

    return (
        <div>
            <Col span={6} xs={24} sm={12} md={12} lg={8} xl={4}>
                <Card style={{ height: '430px', width: '260px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                    <Row gutter={[16, 25]} align={'middle'}>
                        <Col span={24} align={'middle'}>
                            <span style={{ fontSize: '25px', color: 'white', fontStyle: 'oblique' }}> {orderinfo.Vessel}</span>
                            <br />
                            <span style={{ fontSize: '15px' }}>
                                <InfoCircleOutlined />
                                <span> {orderinfo.Laycan[0]}</span>
                            </span>
                            <div style={{ marginBottom: '10px' }} />
                            {orderinfo.Products.map((element, index) => (
                                <Tag key={index} color='red' style={{fontSize:'15px'}}>
                                    {element}
                                </Tag>
                            ))}
                        </Col>
                        <Col span={24} align={'middle'}>
                            {/* <span style={{ fontSize: '15px', color: 'white' }}>Vessel: b2 </span> */}
                            <Progress type="circle" percent={orderpercent} strokeColor={twoColors}
                                size={[200, 100]} strokeWidth={10}  trailColor="#706f6f"
                                format={() => (
                                    <span style={{ color: 'white' }}>{orderpercent}%</span>
                                )} />
                        </Col>
                    </Row>
                </Card>
            </Col>

        </div>
    )
}

export default OrderSummary