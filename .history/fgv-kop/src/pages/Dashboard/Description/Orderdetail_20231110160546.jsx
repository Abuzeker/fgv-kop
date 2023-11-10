import React from 'react'
import { Badge, Card, Descriptions, Progress, Space } from 'antd';
const items = [
    {
        key: '1',
        label: 'Buyer',
        children: 'FGV',
    },
    {
        key: '2',
        label: 'Vessel',
        children: 'sdsd',
    },
    {
        key: '3',
        label: 'Product',
        children: 'CPO',
    },
    {
        key: '4',
        label: 'Layer',
        children: '11',
    },
    {
        key: '5',
        label: 'Order Quantity',
        children: '10 MT',
        span: 2,
    },
    {
        key: '6',
        label: 'Order Date',
        children: '1/1/2023',
    },
    {
        key: '7',
        label: 'Delivery Date',
        children: '14/1/2023',
    },
];
const twoColors = { '0%': '#108ee9', '100%': '#87d068' };

const Orderdetail = () => {
    return (
        <div>
            <Card style={{ fill: 'ActiveBorder', background: 'rgba(247, 247, 247, 0.8)' }}>
                <Space direction='horizontal' size="small" style={{ display: 'flex' }}>

                <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                    <span> Customer: FGV  </span>
                    <span>Vessel: ABC</span>
                    <span>Product: CPO</span>
                    <span>Layer: 10 </span>
                    <span>Order Quantity: <span style={{ fontWeight: 'bold' }}>10 MT</span> </span>
                    <span>Order Date: 1/1/2023</span>
                    <span>Delivary Date: 14/1/2023</span>
                </Space>
                <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                    <span> Customer: FGV  </span>
                    <span>Vessel: ABC</span>
                    <span>Product: CPO</span>
                    <span>Layer: 10 </span>
                    <span>Order Quantity: <span style={{ fontWeight: 'bold' }}>10 MT</span> </span>
                    <span>Order Date: 1/1/2023</span>
                    <span>Delivary Date: 14/1/2023</span>
                </Space>
                </Space>

            </Card>



        </div>
    )
}

export default Orderdetail