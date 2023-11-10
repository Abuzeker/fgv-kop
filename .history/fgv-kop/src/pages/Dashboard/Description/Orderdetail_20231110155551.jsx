import React from 'react'
import { Badge, Card, Descriptions, Progress, Space } from 'antd';
const items = [
    {
        key: '1',
        label: 'Buyer',
        children: <p>FGV</p>,
    },
    {
        key: '2',
        label: 'Vessel',
        children: <p>sdsd</p>,

    },
    {
        key: '3',
        label: 'Product',
        children: <p>CPO</p>,

    },
    {
        key: '4',
        label: 'Layer',
        children: <p>11</p>,

    },
    {
        key: '5',
        label: 'Order Quantity',
        children: <p>10 MT</p>,
    },
    {
        key: '6',
        label: 'Order Date',
        children: <p>1/1/2023</p>,

    },
    {
        key: '7',
        label: 'Delivery Date',
        children: <p>14/1/2023</p>,

    },
];
const twoColors = { '0%': '#108ee9', '100%': '#87d068' };

const Orderdetail = () => {
    return (
        <div>
            <Card style={{ fill: 'ActiveBorder', background: 'rgba(247, 247, 247, 0.8)' }}>
                <Descriptions title="User Info" items={items} />               
                 {/* <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                    <span> Customer: FGV  </span>
                    <span>Vessel: ABC</span>
                    <span>Product: CPO</span>
                    <span>Layer: 10 </span>
                    <span>Order Quantity: <span style={{ fontWeight: 'bold' }}>10 MT</span> </span>
                    <span>Order Date: 1/1/2023</span>
                    <span>Delivary Date: 14/1/2023</span>
                </Space> */}

            </Card>



        </div>
    )
}

export default Orderdetail