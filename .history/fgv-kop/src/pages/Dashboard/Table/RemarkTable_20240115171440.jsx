import { Table } from 'antd'
import React from 'react'
import './tablestyle.css'; // Import your custom styles
import { mockRemark } from '../../../MockData/LineMock';

const RemarkTable = (props) => {

    console.log(props.data);

    const cssstyle = props.plant === "Refining" ? "remark-table":"fract-table"


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
                className={cssstyle}
                scroll={{  y: props.height }}
                pagination={false}
                dataSource={mockRemark}
                bordered
                >


                </Table>
        </div>
    )
}

export default RemarkTable