import React from 'react'
import { Card, Col, Row, Carousel } from 'antd';
import PerformanceRate from '../Graph/PerformanceRate';

const PerformanceCarosel = () => {
    return (
        <div>
            <div style={{ fontSize: '28px', fontWeight: 'bold', textAlign: 'center' }}>Production Rate</div>

            <Row gutter={[10, 10]}>
                <Col span={6} xs={24} sm={24} md={24} lg={12} xl={12}>
                    <Card>
                        <PerformanceRate containername={'rate1'} Prate={0.3} Pstate={'L1500'} />
                    </Card>
                </Col>
                <Col span={6} xs={24} sm={24} md={24} lg={12} xl={12}>
                    <Card>
                        <PerformanceRate containername={'rate2'} Prate={0.5} Pstate={'L1000'} />
                    </Card>
                </Col>
                <Col span={6} xs={24} sm={24} md={24} lg={12} xl={12}>
                    <Card>
                        <PerformanceRate containername={'rate3'} Prate={0.8} Pstate={'KOPFRA 3'} />
                    </Card>
                </Col>
                <Col span={6} xs={24} sm={24} md={24} lg={12} xl={12}>
                    <Card>
                        <PerformanceRate containername={'rate4'} Prate={0.3} Pstate={'KOPFRA 3'} />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default PerformanceCarosel