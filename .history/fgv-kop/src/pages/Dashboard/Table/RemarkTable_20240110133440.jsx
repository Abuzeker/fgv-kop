import { Table } from 'antd'
import React from 'react'
import './tablestyle.css'; // Import your custom styles
import { mockRemark } from '../../../MockData/LineMock';

const RemarkTable = () => {

    const columns = [
        {
            title: 'Date',
            dataIndex: 'Date',
            key: 'Date',
            width:'80px'
            // render:(text,record) =>(
            //     <div>{ <span style={{ paddingLeft: '20px'}} >{text}</span> }</div>
            // )
        },
        {
            title: 'Value',
            dataIndex: 'value',
            key: 'value',
            width:'80px'

            // render:(text,record) =>(
            //     <div>{ <span style={{ paddingLeft: '20px'}} >{text}</span> }</div>
            // )
        },
        {
            title: 'Remark',
            dataIndex: 'Remark',
            key: 'Remark',
            // render:(text,record) =>(
            //     <div>{ <span style={{ paddingLeft: '20px'}} >{text}</span> }</div>
            // )
        },
    ]




    return (
        <div>
            <Table columns={columns}
                style={{
                    backgroundColor: '#292828',
                    color: 'white',
                }}
                className="remark-table"
                scroll={{  y: 390 }}
                pagination={false}
                dataSource={mockRemark}
                
                >


                </Table>
        </div>
    )
}

export default RemarkTable