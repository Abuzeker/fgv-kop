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

const Orderdetail = () => {
    return (
        <div>

            <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                <span> Customer: FGV  </span>
                <br />
                <span>Vessel: ABC</span>
                <br />
                <span>Product: CPO</span>
                <br />
                <span>Layer: 10 </span>
                <br />
                <span>Order Quantity: <span style={{ fontWeight: 'bold' }}>10 MT</span> </span>
                <br />
                <span>Order Date: 1/1/2023</span>
                <br />
                <span>Delivary Date: 14/1/2023</span>
                <br />
                <Progress percent={50} size={[300, 20]} />
            </Space>


            {/* <div style={{ width: '300px', font: 'inherit' }}>
                <span> Customer: FGV  </span>
                <br />
                <span>Vessel: ABC</span>
                <br />
                <span>Product: CPO</span>
                <br />
                <span>Layer: 10 </span>
                <br />
                <span>Order Quantity: <span style={{ fontWeight: 'bold' }}>10 MT</span> </span>
                <br />
                <span>Order Date: 1/1/2023</span>
                <br />
                <span>Delivary Date: 14/1/2023</span>
                <br />
            </div> */}
            {/* <Descriptions title="Order Info" bordered items={items} size='small'/> */}
        </div>
    )
}

export default Orderdetail