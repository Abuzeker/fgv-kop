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
    let cpolog = []
    let cpkolog = []
    let rbdpolog = []


    let data = {
        'Today (CPO)': 0,
        'Todate (CPO)': 0,
        'Today (CPKO)': 0,
        'Todate (CPKO)': 0,
        'Today (RBD PO)': 0,
        'Todate (RBD PO)': 0,
        'date todate (CPO)': 0,
        'date todate (CPKO)': 0,
        'date todate (RBD PO)': 0,
        'date today (CPO)': 0,
        'date today (CPKO)': 0,
        'date today (RBD PO)': 0,
    }

    try {
        data['Todate (CPO)'] = props.datatodate[0]["Todate (CPO)"]
        data['Todate (CPKO)'] = props.datatodate[1]["Todate (CPKO)"]
        data['Todate (RBD PO)'] = props.datatodate[2]["Todate (RBD PO)"]

        data['date todate (CPO)'] = props.datatodate[0]["date"]
        data['date todate (CPKO)'] = props.datatodate[1]["date"]
        data['date todate (RBD PO)'] = props.datatodate[2]["date"]

        data['Today (CPO)'] = props.datatoday[0]["Today (CPO)"]
        data['Today (CPKO)'] = props.datatoday[0]["Today (CPKO)"]
        data['Today (RBD PO)'] = props.datatoday[0]["Today (RBD PO)"]

        data['date Today (CPO)'] = props.datatoday[0]["date"]
        data['date Today (CPKO)'] = props.datatoday[0]["date"]
        data['date Today (RBD PO)'] = props.datatoday[0]["date"]
    } catch (error) {console.log(error);}


    // console.log(cpolog);
    // console.log(cpkolog);
    // console.log(rbdpolog);

    // console.log(props.datatodate);
    // console.log(props.datatoday);

    useEffect(() => {
        props.datatoday.forEach(element => {
            cpolog.push(element['Today (CPO)'])
            cpkolog.push(element['Today (CPKO)'])
            rbdpolog.push(element['Today (RBD PO)'])
        });
    
    
      return () => {
        
      }
    }, [])
    

    return (
        <div style={{ marginTop: '25px', padding: '0 0px' }}>
            <Row gutter={[10, 10]}>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card style={{ height: '190px', background: '#706f6f', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}>MTD CPO </span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{data['Todate (CPO)']} MT</span>
                                    <br />
                                    <span style={{ fontSize: '11px' }}>
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
                    <Card style={{ height: '190px', background: '#706f6f', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}>CPO </span>
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
                                    <TinyBar containername={'cpotinybar'} data={cpolog}/>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card style={{ height: '190px', background: '#706f6f', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}>MTD CPKO </span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{data['Todate (CPKO)']} MT</span>
                                    <br />
                                    <span style={{ fontSize: '11px' }}>
                                        <InfoCircleOutlined />
                                        <span> {data['date todate (CPKO)']}</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyProgress containername={'cpkotinyprogress'} />
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card style={{ height: '190px', background: '#706f6f', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}> CPKO </span>
                        <span style={{ fontSize: '10px' }}>{data['date Today (CPKO)']}</span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{data["Today (CPKO)"]} MT</span>
                                    <br />
                                    <span style={{ fontSize: '13px' }}>
                                        <ArrowUpOutlined />
                                        <span> 0.7 % MTD</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyBar containername={'cpkotinybar'} data={cpkolog}/>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card style={{ height: '190px', background: '#706f6f', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}>MTD RBDPO </span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{data["Todate (RBD PO)"]} MT</span>
                                    <br />
                                    <span style={{ fontSize: '11px' }}>
                                        <InfoCircleOutlined />
                                        <span> {data['date todate (RBD PO)']}</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyProgress containername={'rbdpotinyprogress'} />
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card style={{ height: '190px', background: '#706f6f', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}> RBDPO </span>
                        <span style={{ fontSize: '10px' }}>{data['date Today (RBD PO)']}</span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{data["Today (RBD PO)"]} MT</span>
                                    <br />
                                    <span style={{ fontSize: '13px' }}>
                                        <ArrowUpOutlined />
                                        <span> 0.7 % MTD</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyBar containername={'rbdpotinybar'} data={rbdpolog}/>
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