import React, { useEffect } from 'react'
import TinyBar from '../Graph/TinyBar'
import { Card, Col, Row } from 'antd'
import TinyProgress from '../Graph/TinyProgress'
import { ArrowUpOutlined, InfoCircleOutlined } from '@ant-design/icons';

const cardStyle = {
    borderRadius: '20px 0 0 0', // Top-left border radius
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)', // Adjust shadow as needed
};

const TopCard = (props) => {

    let data = {
        'Today (CPO)': 0,
        'Todate (CPO)': 0,
        'CPO Receive': props.cpoInfo['CPO RCV'],
        'CPO RCV Date': props.cpoInfo['CPO RCV Date'],
        'CPO C/S': props.cpoInfo['CPO C/S'],
        'CPO C/S Date': props.cpoInfo['CPO C/S Date'],
    }

    console.log(props.datatodate);


        try {data['Todate (CPO)'] = props.datatodate[0]["Todate (CPO)"] !== null ? props.datatodate[0]["Todate (CPO)"] : 0;}catch (error) {console.log(error);}
        try {data['date todate (CPO)'] = props.datatodate[0]["date"]!== null ? props.datatodate[0]["date"]: 0}catch (error) {console.log(error);}
        try {data['Today (CPO)'] = props.datatoday[0]["Today (CPO)"]!== null ? props.datatoday[0]["Today (CPO)"]: 0}catch (error) {console.log(error);}
        try {data['date Today (CPO)'] = props.datatoday[0]["date"]!== null ? props.datatoday[0]["date"]: 0}catch (error) {console.log(error);}


    // console.log(props.cpolog);
    // console.log(cpkolog);
    // console.log(rbdpolog);

    // console.log(props.datatodate);
    // console.log(props.datatoday);

    return (
        <div style={{ marginTop: '25px', padding: '0 0px' }}>
            <Row gutter={[10, 10]}>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card style={{ height: '190px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}>ToDate CPO </span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{data['Todate (CPO)']}</span>
                                    <span style={{ fontSize: '15px', color: 'white' }}> MT</span>

                                    <br />
                                    <span style={{ fontSize: '13px' }}>
                                        <InfoCircleOutlined />
                                        <span> {data['date todate (CPO)']}</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyProgress containername={'cpotinyprogress'} />
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card style={{ height: '190px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}>Today CPO </span>
                        {/* <span style={{ fontSize: '10px', color: 'white' }}>{data['date Today (CPO)']}</span> */}
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{data['Today (CPO)']}</span>
                                    <span style={{ fontSize: '15px', color: 'white' }}> MT</span>

                                    <br />
                                    <span style={{ fontSize: '13px' }}>
                                        <InfoCircleOutlined />
                                        <span> {data['date Today (CPO)']}</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyBar containername={'cpotinybar'} data={props.cpolog}/>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card style={{ height: '190px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}>RCV CPO </span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{data['CPO Receive']}</span>
                                    <span style={{ fontSize: '15px', color: 'white' }}> MT</span>

                                    <br />
                                    <span style={{ fontSize: '11px' }}>
                                        <InfoCircleOutlined />
                                        <span> {data['CPO RCV Date']}</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyBar containername={'cporcvtinybar'} data={props.cporcvLog}/>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card style={{ height: '190px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}>Closing Stock CPO </span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{data['CPO C/S']}</span>
                                    <span style={{ fontSize: '15px', color: 'white' }}> MT</span>

                                    <br />
                                    <span style={{ fontSize: '11px' }}>
                                        <InfoCircleOutlined />
                                        <span> {data['CPO C/S Date']}</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyBar containername={'cpocstinybar'} data={props.cpocs}/>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card style={{ height: '190px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}>Monthly Allocation</span>
                        <span style={{ fontSize: '10px', color: 'white' }}>{data['date Today (CPO)']}</span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{data['Today (CPO)']}</span>
                                    <span style={{ fontSize: '15px', color: 'white' }}> MT</span>

                                    <br />
                                    <span style={{ fontSize: '11px' }}>
                                        <InfoCircleOutlined />
                                        <span> {data['CPO C/S Date']}</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyBar containername={'cpoAllocationtinybar'} data={props.cpolog}/>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

                
                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card style={{ height: '190px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}>Shipment Completion</span>
                        <span style={{ fontSize: '10px', color: 'white' }}>{data['date Today (CPO)']}</span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{data['Today (CPO)']} MT</span>
                                    <br />
                                    <span style={{ fontSize: '13px' }}>
                                        <ArrowUpOutlined />
                                        <span> 0.7 % MTD</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyBar containername={'cpoShipmenttinybar'} data={props.cpolog}/>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default TopCard