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
            // render:(text,record) =>(
            //     <div>{ <span style={{ paddingLeft: '20px'}} >{text}</span> }</div>
            // )
        },
        {
            title: 'value',
            dataIndex: 'value',
            key: 'value',
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
                className="report-table"
                size="medium"
                scroll={{ x: 650, y: 700 }}
                pagination={false}
                dataSource={mockRemark}
                >


                </Table>
        </div>
    )
}

export default RemarkTable