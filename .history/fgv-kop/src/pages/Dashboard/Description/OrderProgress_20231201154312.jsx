import { Card, Col, Divider, Progress, Row, Space, Statistic } from 'antd'
import React from 'react'
import CountDown from './CountDown'
import { CheckCircleFilled, CheckCircleOutlined } from '@ant-design/icons'
const twoColors = { '0%': '#108ee9', '100%': '#87d068' };



const OrderProgress = (props) => {

    const customFormat = percent => (<span style={{ color: 'white' }}>{percent}%</span>)
    const Orderdetails = props.info

    console.log(Orderdetails);

    let today_eff = Orderdetails['Today Quantity']/Orderdetails['Today Targeted Quantity']
    if (isNaN(today_eff)) {
        today_eff = 0;
    }

    console.log(today_eff);




    let todate = Orderdetails['Todate Quantity']
    if (todate == undefined) {
        todate = 0
    }

    let Remaing = Orderdetails.Quantity - todate

    if (isNaN(Remaing)) {
        Remaing = 0;
    }else if(Remaing<0)
    {
        Remaing = 0;
    }



    // console.log(Orderdetails['Anticipated Fulfillment Date']);

    return (
        <div>
            <Card style={{ background: '#706f6f', color: 'white' }}>

                <Row gutter={16}>

                    <Col
                        span={24}
                        style={{
                            marginTop: 4,
                        }}
                    >
                        <CountDown Period={5} />
                    </Col>

                    <Divider orientation='left' style={{ color: 'white', borderColor: 'white' }}></Divider>
                    <Col span={24}>
                        <Space direction="vertical" size="small" style={{ display: 'flex', color: 'white' }}>

                            <Row gutter={[10, 10]}>

                                <Col span={8}>
                                    <Statistic
                                        valueStyle={{ color: 'white' }}
                                        title={<span style={{ color: 'white' }}>Produced </span>}
                                        value={Orderdetails['Todate Quantity']}
                                        suffix={<span style={{ fontSize: '10px', color: 'white' }}>MT</span>}
                                    />
                                </Col>

                                <Col span={8}>
                                    <Statistic
                                        valueStyle={{ color: 'white' }}
                                        title={<span style={{ color: 'white' }}>Remaining </span>}
                                        value={Remaing}
                                        suffix={<span style={{ fontSize: '10px', color: 'white' }}>MT</span>}
                                    />
                                </Col>

                                <Col span={8}>
                                    <Statistic
                                        valueStyle={{ color: 'white' }}
                                        title={<span style={{ color: 'white' }}>Today Target </span>}
                                        value={Orderdetails['Today Targeted Quantity']}
                                        suffix={<span style={{ fontSize: '10px', color: 'white' }}>MT/Day</span>}
                                    />
                                </Col>
                            </Row>

                            <Space direction="horizontal" size={40} style={{ display: 'flex', color: 'white' }}>
                                <Statistic
                                    valueStyle={{ fontSize: '17px', fontWeight: 600, color: 'white' }}
                                    title={<span style={{ color: 'white' }}>Anticipated Fulfilment Date</span>}
                                    value={Orderdetails['Anticipated Fulfillment Date']}
                                />

                                <Statistic
                                    valueStyle={{ fontSize: '15px', color: 'white' }}
                                    title={<span style={{ color: 'white' }}>Today Efficiency</span>}
                                    value={today_eff}
                                    suffix={'%'}
                                    prefix={<CheckCircleFilled style={{ color: 'white' }} />}
                                />
                            </Space>

                            <div style={{ paddingTop: '5px', fontWeight: 'bold', padding: ' 10px 0px 0px 0px' }}>
                                <span style={{ fontSize: '15px', color: 'white' }}>Attainment Rate</span>
                                <Progress percent={Orderdetails['Attainment Rate'] * 100} strokeColor={twoColors} size={'large'} strokeWidth={15} format={customFormat} />
                            </div>

                        </Space>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default OrderProgress

