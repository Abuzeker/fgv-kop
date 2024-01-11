import { Card, Col, Divider, Progress, Row, Space, Statistic } from 'antd'
import React from 'react'
import CountDown from './CountDown'
import { CheckCircleFilled, CheckCircleOutlined } from '@ant-design/icons'
const twoColors = { '0%': '#108ee9', '100%': '#87d068' };



const OrderProgress = (props) => {

    const customFormat = percent => (<span style={{ color: 'white' }}>{percent}%</span>)
    const Orderdetails = props.info

    // console.log(Orderdetails);

    let today_eff = parseFloat(Orderdetails['Today Quantity'] / Orderdetails['Today Targeted Quantity'] * 100).toFixed(2)
    if (isNaN(today_eff)) {
        today_eff = 0;
    }

    // console.log(today_eff);

    let todate = Orderdetails['Todate Quantity']
    if (todate == undefined) {
        todate = 0
    }

    let Remaing = Orderdetails.Quantity - todate

    if (isNaN(Remaing)) {
        Remaing = 0;
    } else if (Remaing < 0) {
        Remaing = 0;
    }

    const laycanStartDate = Orderdetails.Laycan[0];
    const laycanEndDate = Orderdetails.Laycan[1];
    const daysDifference = calculateDateDifferenceInDays(laycanStartDate, laycanEndDate);

    // console.log(`Difference in days between ${laycanStartDate} and ${laycanEndDate}: ${daysDifference} days`);


    function calculateDateDifferenceInDays(startDateStr, endDateStr) {
        // Convert date strings to MM/DD/YYYY format
        const startDateParts = startDateStr.split('/');
        const endDateParts = endDateStr.split('/');
        const formattedStartDate = `${startDateParts[1]}/${startDateParts[0]}/${startDateParts[2]}`;
        const formattedEndDate = `${endDateParts[1]}/${endDateParts[0]}/${endDateParts[2]}`;

        // Create Date objects
        const startDate = new Date(formattedStartDate);
        const endDate = new Date(formattedEndDate);

        // Calculate the difference in milliseconds
        const timeDifference = endDate - startDate;

        // Calculate the number of days
        const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

        return daysDifference;
    }



    // console.log(Orderdetails['Anticipated Fulfillment Date']);

    return (
        <div>
            <Card style={{ background: '#292828', color: 'white' }}>

                <Row gutter={16}>

                    <Col
                        span={24}
                        style={{
                            marginTop: 4,
                        }}
                    >
                        <CountDown Period={daysDifference} />
                    </Col>

                    <Divider orientation='left' style={{ color: 'white', borderColor: 'white' }}></Divider>
                    <Col span={24}>
                        <Space direction="vertical" size="small" style={{ display: 'flex', color: 'white' }}>

                            <Row gutter={[10, 10]}>

                                <Col span={8}>
                                    <Statistic
                                        valueStyle={{ fontSize: '25px', color: 'white' }}
                                        title={<span style={{ color: 'white', fontSize: '22px' }}>To <Data></Data>ate </span>}
                                        value={Orderdetails['Todate Quantity']}
                                        suffix={<span style={{ fontSize: '15px', color: 'white' }}>MT</span>}
                                    />
                                </Col>

                                <Col span={8}>
                                    <Statistic
                                        valueStyle={{ fontSize: '25px', color: 'white' }}
                                        title={<span style={{ color: 'white', fontSize: '22px' }}>Balance </span>}
                                        value={Remaing}
                                        suffix={<span style={{ fontSize: '15px', color: 'white' }}>MT</span>}
                                    />
                                </Col>

                                <Col span={8}>
                                    <Statistic
                                        valueStyle={{ fontSize: '25px', color: 'white' }}
                                        title={<span style={{ color: 'white', fontSize: '22px' }}>Today </span>}
                                        value={Orderdetails['Today Targeted Quantity']}
                                        suffix={<span style={{ fontSize: '15px', color: 'white' }}>MT/Day</span>}
                                    />
                                </Col>
                            </Row>

                            <Space direction="horizontal" size={40} style={{ display: 'flex', color: 'white' }}>

                                <Row gutter={[30, 10]}>
                                    <Col span={12}>

                                        <Statistic
                                            valueStyle={{ fontSize: '20px', fontWeight: 600, color: 'white' }}
                                            title={<span style={{ color: 'white', fontSize: '16px' }}>Anticipated Fulfilment Date</span>}
                                            value={Orderdetails['Anticipated Fulfillment Date']}
                                        />
                                    </Col>
        
                                    <Col span={12}>
                                        <Statistic
                                            valueStyle={{ fontSize: '25px', color: 'white' }}
                                            title={<span style={{ color: 'white', fontSize: '18px' }}>Today Efficiency</span>}
                                            value={today_eff}
                                            suffix={'%'}
                                            prefix={<CheckCircleFilled style={{ color: 'white', fontSize: '20px' }} />}
                                        />
                                    </Col>
                                </Row>

                            </Space>

                            <div style={{ fontWeight: 'bold', padding: ' 5px 0px 0px 0px' }}>
                                <span style={{ fontSize: '22px', color: 'white' }}>Cargo Readiness</span>
                                <Progress percent={Orderdetails['Attainment Rate']} strokeColor={twoColors} size={'large'} strokeWidth={15} format={customFormat} />
                            </div>

                        </Space>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default OrderProgress

