import { Table } from 'antd'
import React from 'react'

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
        <Table columns={columns}  ></Table>
    </div>
  )
}

export default RemarkTable