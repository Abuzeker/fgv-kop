import React, { useEffect } from 'react'
import TinyBar from '../Graph/TinyBar'
import { Card, Col, Row } from 'antd'
import TinyProgress from '../Graph/TinyProgress'
import { ArrowUpOutlined, InfoCircleOutlined } from '@ant-design/icons';

const cardStyle = {
    borderRadius: '20px 0 0 0', // Top-left border radius
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)', // Adjust shadow as needed
};

const TopCPOCard = (props) => {


    let data = {
        'CPO Total Value': 0,
        'Todate (CPO)': 0,
        'CPO Receive': props.cpoInfo['CPO RCV'],
        'CPO RCV Date': props.cpoInfo['CPO RCV Date'],
        'CPO C/S': props.cpoInfo['CPO C/S'],
        'CPO C/S Date': props.cpoInfo['CPO C/S Date'],
    }

    console.log(props.datatodate);
    console.log(props.datatoday);

    try { data['Todate (CPO)'] = props.datatodate[0]["Todate (CPO)"] !== null ? props.datatodate[0]["Todate (CPO)"] : 0; } catch (error) { console.log(error); }
    try { data['date todate (CPO)'] = props.datatodate[0]["date"] !== null ? props.datatodate[0]["date"] : 0 } catch (error) { console.log(error); }


//Today CPO
    try {
        let found = false; // Flag to indicate if a non-zero value has been found
        // Initialize the default values
        data['CPO Total Value'] = 0;
        data['date CPO Total Value'] = '';
    
        // Check if props.datatoday is defined and not empty
        if (props.datatoday && props.datatoday.length > 0) {
            for (let item of props.datatoday) {
                if (item["CPO Total Value"] !== "0" && item["CPO Total Value"] !== null) {
                    data['CPO Total Value'] = item["CPO Total Value"];
                    data['date CPO Total Value'] = item["date"]; // Save the date when the value is found
                    found = true;
                    break; // Break as soon as a non-zero value is found
                }
            }
        }
    
        // If no non-zero value is found, you might want to set a default or specific value for the date
        if (!found) {
            data['date CPO Total Value'] = 'No valid date'; // Example fallback
        }
    } catch (error) {
        console.log(error); // Log any errors that occur
    }

    //CPORCV
    try {
        let found = false; // Flag to indicate if a non-zero value has been found
        // Initialize the default values
        data['CPO RCV'] = 0;
        data['date CPO RCV'] = '';
    
        // Check if props.datatoday is defined and not empty
        if (props.datatoday && props.datatoday.length > 0) {
            for (let item of props.datatoday) {
                if (item["CPO RCV"] !== "0" && item["CPO RCV"] !== null) {
                    data['CPO RCV'] = item["CPO RCV"];
                    data['date CPO RCV'] = item["date"]; // Save the date when the value is found
                    found = true;
                    break; // Break as soon as a non-zero value is found
                }
            }
        }
    
        // If no non-zero value is found, you might want to set a default or specific value for the date
        if (!found) {
            data['date CPO RCV'] = 'No valid date'; // Example fallback
        }
    } catch (error) {
        console.log(error); // Log any errors that occur
    }
    


    // try { data['date CPO Total Value'] = props.datatoday[1]["date"] !== null ? props.datatoday[1]["date"] : 0 } catch (error) { console.log(error); }


    // console.log(props.cpolog);
    // console.log(cpkolog);
    // console.log(rbdpolog);

    // console.log(props.datatodate);
    // console.log(SC);

    return (
        <div style={{ marginTop: '25px', padding: '0 0px' }}>
            <Row gutter={[13, 10]} justify="center">

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={9}>
                    <Card style={{ height: '190px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <Row>
                            <Col span={6} style={{ borderRight: '1px solid white' }}>
                                <span style={{ fontSize: '20px', color: 'white' }}> CPO ToDate  </span>

                                <Row gutter={16} align={'middle'}>
                                    <Col span={24}>
                                        <br />
                                        <span style={{ fontSize: '25px', color: 'white' }}>{new Intl.NumberFormat().format(data['Todate (CPO)'])}</span>
                                        <span style={{ fontSize: '15px', color: 'white' }}> MT</span>
                                        <br />
                                        <span style={{ fontSize: '13px' }}>
                                            <InfoCircleOutlined />
                                            <span> {data['date todate (CPO)']}</span>
                                        </span>
                                    </Col>
                                    {/* <Col span={12}>
                                        <TinyProgress containername={'cpkotinyprogress'} data={40} />
                                    </Col> */}
                                </Row>
                            </Col>
                            <Col span={18} style={{ paddingLeft: '20px' }}>
                                <span style={{ fontSize: '20px', color: 'white' }}>CPO Today  </span>
                                {/* <span style={{ fontSize: '10px', color: 'white' }}>{data['date Today (CPKO)']}</span> */}
                                <div>
                                    <Row gutter={16} align={'middle'}>
                                        <Col span={12}>
                                            <span style={{ fontSize: '25px', color: 'white' }}>{new Intl.NumberFormat().format(data['CPO Total Value'])}</span>
                                            <span style={{ fontSize: '15px', color: 'white' }}> MT</span>

                                            <br />
                                            <span style={{ fontSize: '13px' }}>
                                                <InfoCircleOutlined />
                                                <span> {data['date CPO Total Value']}</span>
                                            </span>
                                        </Col>
                                        <Col span={12}>
                                            <TinyBar containername={'cpotinybar'} data={props.cpolog} />
                                        </Col>
                                    </Row>
                                </div>

                            </Col>

                        </Row>

                    </Card>
                </Col>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={5}>
                    <Card style={{ height: '190px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}> CPO RCV </span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{new Intl.NumberFormat().format(data['CPO RCV'])}</span>
                                    <span style={{ fontSize: '15px', color: 'white' }}> MT</span>

                                    <br />
                                    <span style={{ fontSize: '11px' }}>
                                        <InfoCircleOutlined />
                                        <span> {data['date CPO RCV']}</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyBar containername={'cporcvtinybar'} data={props.cporcvLog} />
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={5}>
                    <Card style={{ height: '190px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}>CPO Closing Stock  </span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{new Intl.NumberFormat().format(props.cpocs[1])}</span>
                                    <span style={{ fontSize: '15px', color: 'white' }}> MT</span>

                                    <br />
                                    <span style={{ fontSize: '11px' }}>
                                        <InfoCircleOutlined />
                                        <span> {data['date CPO Total Value']}</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyBar containername={'cpocstinybar'} data={props.cpocs} />
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={5}>
                    <Card style={{ height: '190px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}>CPO RCV vs Allocation</span>
                        <div>
                            <span style={{ fontSize: '55px', color: 'white' }}>{new Intl.NumberFormat().format(props.rcvall)}</span>
                            <span style={{ fontSize: '15px', color: 'white' }}> %</span>

                            <br />
                            <span style={{ fontSize: '11px' }}>
                                <InfoCircleOutlined />
                                <span> {data['CPO C/S Date']}</span>
                            </span>
                        </div>
                    </Card>
                </Col>


                {/* <Col span={4} xs={24} sm={12} md={12} lg={8} xl={4}>
                    <Card style={{ height: '190px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}>Shipment Completion</span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{SC} </span>
                                    <span style={{ fontSize: '15px', color: 'white' }}> %</span>

                                    <br />
                                    <span style={{ fontSize: '11px' }}>
                                        <InfoCircleOutlined />
                                        <span> {data['CPO C/S Date']}</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyProgress containername={'cpoShipmentprogress'} data={SC}/>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col> */}
            </Row>
        </div>
    )
}

export default TopCPOCard