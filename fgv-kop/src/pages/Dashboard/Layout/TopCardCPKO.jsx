import React, { useEffect } from 'react'
import TinyBar from '../Graph/TinyBar'
import { Card, Col, Row } from 'antd'
import TinyProgress from '../Graph/TinyProgress'
import { ArrowUpOutlined, InfoCircleOutlined } from '@ant-design/icons';

const cardStyle = {
    borderRadius: '20px 0 0 0', // Top-left border radius
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)', // Adjust shadow as needed
};

const TopCPKOCard = (props) => {

    console.log(props.cpkoInfo);


    let data = {
        'CPKO/ CCNO BLENDED TOTAL PROCESS': 0,
        'Todate (CPKO)': 0,
        'CPKO Receive': parseFloat(props.cpkorcvLog[1]).toFixed(2),
        'CPKO RCV Date': '',
        'CPKO C/S': parseFloat(props.cpkocs[1]).toFixed(2),
        'CPKO C/S Date': '',
    }

    console.log(props.datatoday);
    

    try { data['Todate (CPKO)'] = props.datatodate[0]["Todate (CPKO)"] !== null ? props.datatodate[0]["Todate (CPKO)"] : 0; } catch (error) { console.log(error); }
    try { data['date todate (CPKO)'] = props.datatodate[0]["date"] !== null ? props.datatodate[0]["date"] : 0 } catch (error) { console.log(error); }
   
    // try { data['CPKO/ CCNO BLENDED TOTAL PROCESS'] = props.datatoday[1]["CPKO/ CCNO BLENDED TOTAL PROCESS"] !== null ? props.datatoday[1]["CPKO/ CCNO BLENDED TOTAL PROCESS"] : 0 } catch (error) { console.log(error); }
    // try { data['date CPKO/ CCNO BLENDED TOTAL PROCESS'] = props.datatoday[1]["date"] !== null ? props.datatoday[1]["date"] : 0 } catch (error) { console.log(error); }

//Today CPKO 

    try {
        let found = false; // Flag to indicate if a non-zero value has been found
        // Initialize the default values
        data['CPKO/ CCNO BLENDED TOTAL PROCESS'] = 0;
        data['date CPKO/ CCNO BLENDED TOTAL PROCESS'] = '';
    
        // Check if props.datatoday is defined and not empty
        if (props.datatoday && props.datatoday.length > 0) {
            for (let item of props.datatoday) {
                if (item["CPKO/ CCNO BLENDED TOTAL PROCESS"] !== "0" && item["CPKO/ CCNO BLENDED TOTAL PROCESS"] !== null) {
                    data['CPKO/ CCNO BLENDED TOTAL PROCESS'] = item["CPKO/ CCNO BLENDED TOTAL PROCESS"];
                    data['date CPKO/ CCNO BLENDED TOTAL PROCESS'] = item["date"]; // Save the date when the value is found
                    found = true;
                    break; // Break as soon as a non-zero value is found
                }
            }
        }
    
        // If no non-zero value is found, you might want to set a default or specific value for the date
        if (!found) {
            data['date CPKO/ CCNO BLENDED TOTAL PROCESS'] = 'No valid date'; // Example fallback
        }
    } catch (error) {
        console.log(error); // Log any errors that occur
    }


//CPKORCV
        try {
            let found = false; // Flag to indicate if a non-zero value has been found
            // Initialize the default values
            data['CPKO RCV'] = 0;
            data['date CPKO RCV'] = '';
        
            // Check if props.datatoday is defined and not empty
            if (props.datatoday && props.datatoday.length > 0) {
                for (let item of props.datatoday) {
                    if (item["CPKO RCV"] !== "0" && item["CPKO RCV"] !== null) {
                        data['CPKO RCV'] = item["CPKO RCV"];
                        data['date CPKO RCV'] = item["date"]; // Save the date when the value is found
                        found = true;
                        break; // Break as soon as a non-zero value is found
                    }
                }
            }
        
            // If no non-zero value is found, you might want to set a default or specific value for the date
            if (!found) {
                data['date CPKO RCV'] = 'No valid date'; // Example fallback
            }
        } catch (error) {
            console.log(error); // Log any errors that occur
        }
   


//RKOCS
try {
    let found = false; // Flag to indicate if a non-zero value has been found
    // Initialize the default values
    data['RKO C/S'] = 0;
    data['date RKO C/S'] = '';

    // Check if props.datatoday is defined and not empty
    if (props.datatoday && props.datatoday.length > 0) {
        for (let item of props.datatoday) {
            if (item["RKO C/S"] !== "0" && item["RKO C/S"] !== null) {
                data['RKO C/S'] = item["RKO C/S"];
                data['date RKO C/S'] = item["date"]; // Save the date when the value is found
                found = true;
                break; // Break as soon as a non-zero value is found
            }
        }
    }

    // If no non-zero value is found, you might want to set a default or specific value for the date
    if (!found) {
        data['date RKO C/S'] = 'No valid date'; // Example fallback
    }
} catch (error) {
    console.log(error); // Log any errors that occur
}



    // try { data['RKO C/S'] = props.datatoday[1]["RKO C/S"] !== null ? props.datatoday[1]["RKO C/S"] : 0 } catch (error) { console.log(error); }
    // try { data['RKO C/S Date'] = props.datatoday[1]["date"] !== null ? props.datatoday[1]["date"] : 0 } catch (error) { console.log(error); }

    // console.log(props.cpolog);
    // console.log(cpkolog);
    // console.log(rbdpolog);

    // console.log(props.datatodate);
    // console.log(SC);
    console.log(props.cpkorcvLog);
console.log(props.rkocs);
    return (
        <div style={{ marginTop: '5px', padding: '0 0px' }}>
            <Row gutter={[13, 10]} justify="center">

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={9}>
                    <Card style={{ height: '190px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <Row>
                            <Col span={6} style={{ borderRight: '1px solid white'}}>
                                <span style={{ fontSize: '20px', color: 'white' }}> CPKO ToDate</span>

                                <Row gutter={16} align={'middle'}>
                                    <Col span={24}>
                                        <br />
                                        <span style={{ fontSize: '25px', color: 'white' }}>{new Intl.NumberFormat().format(data['Todate (CPKO)'])}</span>
                                        <span style={{ fontSize: '15px', color: 'white' }}> MT</span>
                                        <br />
                                        <span style={{ fontSize: '13px' }}>
                                            <InfoCircleOutlined />
                                            <span> {data['date todate (CPKO)']}</span>
                                        </span>
                                    </Col>
                                    {/* <Col span={12}>
                                        <TinyProgress containername={'cpkotinyprogress'} data={40} />
                                    </Col> */}
                                </Row>
                            </Col>
                            <Col span={18} style={{ paddingLeft: '20px' }}>
                                <span style={{ fontSize: '20px', color: 'white' }}> CPKO Today</span>
                                {/* <span style={{ fontSize: '10px', color: 'white' }}>{data['date CPKO/ CCNO BLENDED TOTAL PROCESS']}</span> */}
                                <div>
                                    <Row gutter={16} align={'middle'}>
                                        <Col span={12}>
                                            <span style={{ fontSize: '25px', color: 'white' }}>{new Intl.NumberFormat().format(data['CPKO/ CCNO BLENDED TOTAL PROCESS'])}</span>
                                            <span style={{ fontSize: '15px', color: 'white' }}> MT</span>

                                            <br />
                                            <span style={{ fontSize: '13px' }}>
                                                <InfoCircleOutlined />
                                                <span> {data['date CPKO/ CCNO BLENDED TOTAL PROCESS']}</span>
                                            </span>
                                        </Col>
                                        <Col span={12}>
                                            <TinyBar containername={'cpkotinybar'} data={props.cpkolog} />
                                        </Col>
                                    </Row>
                                </div>

                            </Col>

                        </Row>

                    </Card>
                </Col>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={5}>
                    <Card style={{ height: '190px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}>CPKO RCV  </span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{new Intl.NumberFormat().format(data['CPKO RCV'])}</span>
                                    <span style={{ fontSize: '15px', color: 'white' }}> MT</span>

                                    <br />
                                    <span style={{ fontSize: '11px' }}>
                                        <InfoCircleOutlined />
                                        <span> {data['date CPKO RCV']}</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyBar containername={'cpkorcvtinybar'} data={props.cpkorcvLog} />
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={5}>
                    <Card style={{ height: '190px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}>CPKO Closing Stock  </span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{new Intl.NumberFormat().format(data['CPKO C/S'])}</span>
                                    <span style={{ fontSize: '15px', color: 'white' }}> MT</span>

                                    <br />
                                    <span style={{ fontSize: '11px' }}>
                                        <InfoCircleOutlined />
                                        <span> {data['date RKO C/S']}</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyBar containername={'cpkocstinybar'} data={props.cpkocs} />
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

                <Col span={4} xs={24} sm={12} md={12} lg={8} xl={5}>
                    <Card style={{ height: '190px', background: '#292828', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e8e8e8', }}>
                        <span style={{ fontSize: '20px', color: 'white' }}>RKO Closing Stock</span>
                        <div>
                            <Row gutter={16} align={'middle'}>
                                <Col span={12}>
                                    <span style={{ fontSize: '25px', color: 'white' }}>{data['RKO C/S']}</span>
                                    <span style={{ fontSize: '15px', color: 'white' }}> MT</span>

                                    <br />
                                    <span style={{ fontSize: '11px' }}>
                                        <InfoCircleOutlined />
                                        <span> {data['date RKO C/S']}</span>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <TinyBar containername={'rkocstinybar'} data={props.rkocs} />
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

            </Row>
        </div>
    )
}

export default TopCPKOCard