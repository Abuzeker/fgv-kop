import React from 'react'
import { Card, Col,  Row,  Carousel } from 'antd';
import PerformanceRate from '../Graph/PerformanceRate';

const PerformanceCarosel = () => {
    return (
        <div>
            <Row gutter={[20, 10]}>
                <Col span={6} xs={24} sm={24} md={24} lg={14} xl={10}>
                    <Card>
                        <PerformanceRate containername={'rate1'} Prate={0.3} Pstate={'Bad'} />
                    </Card>
                </Col>
                <Col span={6} xs={24} sm={24} md={24} lg={10} xl={10}>
                    <Card>
                        <PerformanceRate containername={'rate2'} Prate={0.3} Pstate={'Bad'} />
                    </Card>
                </Col>
                <Col span={6} xs={24} sm={24} md={24} lg={10} xl={10}>
                    <Card>
                        <PerformanceRate containername={'rate3'} Prate={0.3} Pstate={'Bad'} />
                    </Card>
                </Col>
                <Col span={6} xs={24} sm={24} md={24} lg={10} xl={10}>
                    <Card>
                        <PerformanceRate containername={'rate4'} Prate={0.3} Pstate={'Bad'} />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default PerformanceCarosel