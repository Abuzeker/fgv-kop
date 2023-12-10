import React from 'react'
import Utilitytable from '../Table/Utilitytable'
import { Card, Carousel, Col, Row } from 'antd'
import Barchart from '../Graph/Barchart'
import CostefTable from '../Table/CostefTable'

const UtilizationCarosel = () => {
  return (
    <Carousel fade={true} autoplay autoplaySpeed={10000} >
      <div>
        <Card title={<div className="custom-card-title">L1000</div>}>
          <Row gutter={[30, 30]} align={'middle'} >

            {/* <Col span={6} xs={24} sm={24} md={24} xl={7} lg={6}>
              <CostefTable />
            </Col> */}

            <Col span={12} xs={24} sm={24} md={24} xl={10} lg={12}>
              <Barchart containername={'L1000barcontainer'} />
            </Col>

            <Col span={12} xs={24} sm={24} md={24} xl={7} lg={6}>
              <Utilitytable />
            </Col>
          </Row>
        </Card>
      </div>

      {/* <div>
        <Card title={<div className="custom-card-title">L1500</div>}>
          <Row gutter={[30, 30]} align={'middle'} >

          <Col span={6} xs={24} sm={24} md={24} xl={7} lg={6}>
              <CostefTable />
            </Col>

            <Col span={12} xs={24} sm={24} md={24} xl={10} lg={12}>
              <Barchart containername={'L1500barcontainer'} />
            </Col>

            <Col span={6} xs={24} sm={24} md={24} xl={7} lg={6}>
              <Utilitytable />
            </Col>
          </Row>
        </Card>
      </div>

      <div>
        <Card title={<div className="custom-card-title">KOPFRA 3</div>}>
          <Row gutter={[30, 30]} align={'middle'} >

          <Col span={6} xs={24} sm={24} md={24} xl={7} lg={6}>
              <CostefTable />
            </Col>

            <Col span={12} xs={24} sm={24} md={24} xl={10} lg={12}>
              <Barchart containername={'KOPFRA3barcontainer'} />
            </Col>

            <Col span={6} xs={24} sm={24} md={24} xl={7} lg={6}>
              <Utilitytable />
            </Col>
          </Row>
        </Card>
      </div>

      <div>
        <Card title={<div className="custom-card-title">KOPFRA 4</div>}>
          <Row gutter={[30, 30]} align={'middle'} >

          <Col span={6} xs={24} sm={24} md={24} xl={7} lg={6}>
              <CostefTable />
            </Col>

            <Col span={12} xs={24} sm={24} md={24} xl={10} lg={12}>
              <Barchart containername={'KOPFRA4barcontainer'} />
            </Col>

            <Col span={6} xs={24} sm={24} md={24} xl={7} lg={6}>
              <Utilitytable />
            </Col>
          </Row>
        </Card>
      </div> */}
    </Carousel>
  )
}

export default UtilizationCarosel