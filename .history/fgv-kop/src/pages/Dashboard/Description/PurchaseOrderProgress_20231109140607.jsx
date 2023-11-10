import { Card, Col, Row } from 'antd'
import React from 'react'

const PurchaseOrderProgress = () => {
    return (
        <div style={{ marginTop: '25px', marginBottom: '25px', padding: '0 50px' }}>
            <Card>
                <Row gutter={[10, 10]}>
                    <Col span={12}>
                        <Card>
                            Buyer InfoCircleOutlined
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            Buyer InfoCircleOutlined
                        </Card>
                    </Col>
                </Row>


            </Card>
        </div>
    )
}

export default PurchaseOrderProgress