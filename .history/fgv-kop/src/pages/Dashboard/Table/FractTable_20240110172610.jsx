import { Table } from 'antd'
import React from 'react'
import './tablestyle.css'; // Import your custom styles

const FractTable = ({data}) => {
    console.log(data);

    const columns = [
        
            {
                title: 'Date',
                dataIndex: 'Tarikh (ANALISIS HARIAN FRACTIONATION)',
                key: 'Tarikh (ANALISIS HARIAN FRACTIONATION)',
                // render:(text,record) =>(
                //     <div>{ <span style={{ paddingLeft: '20px'}} >{text}</span> }</div>
                // )
            },
            {
                title: 'PO (ANALISIS HARIAN FRACTIONATION)',
                dataIndex: 'PO (ANALISIS HARIAN FRACTIONATION)',
                key: 'PO (ANALISIS HARIAN FRACTIONATION)',
                // render:(text,record) =>(
                //     <div>{ <span style={{ paddingLeft: '20px'}} >{text}</span> }</div>
                // )
            },
            {
                title: 'PL (ANALISIS HARIAN FRACTIONATION)',
                dataIndex: 'PL (ANALISIS HARIAN FRACTIONATION)',
                key: 'PL (ANALISIS HARIAN FRACTIONATION)',
                // render:(text,record) =>(
                //     <div>{ <span style={{ paddingLeft: '20px'}} >{text}</span> }</div>
                // )
            },
            {
                title: 'PS (ANALISIS HARIAN FRACTIONATION)',
                dataIndex: 'PS (ANALISIS HARIAN FRACTIONATION)',
                key: 'PS (ANALISIS HARIAN FRACTIONATION)',
                // render:(text,record) =>(
                //     <div>{ <span style={{ paddingLeft: '20px'}} >{text}</span> }</div>
                // )
            },
            {
                title: 'YLD PL (ANALISIS HARIAN FRACTIONATION)',
                dataIndex: 'YLD PL (ANALISIS HARIAN FRACTIONATION)',
                key: 'YLD PL (ANALISIS HARIAN FRACTIONATION)',
                // render:(text,record) =>(
                //     <div>{ <span style={{ paddingLeft: '20px'}} >{text}</span> }</div>
                // )
            },
            {
                title: 'YLD PS (ANALISIS HARIAN FRACTIONATION)',
                dataIndex: 'YLD PS (ANALISIS HARIAN FRACTIONATION)',
                key: 'YLD PS (ANALISIS HARIAN FRACTIONATION)',
                // render:(text,record) =>(
                //     <div>{ <span style={{ paddingLeft: '20px'}} >{text}</span> }</div>
                // )
            },

            {
                title: 'UF (ANALISIS HARIAN FRACTIONATION)',
                dataIndex: 'UF (ANALISIS HARIAN FRACTIONATION)',
                key: 'UF (ANALISIS HARIAN FRACTIONATION)',
                // render:(text,record) =>(
                //     <div>{ <span style={{ paddingLeft: '20px'}} >{text}</span> }</div>
                // )
            },
    ]

  return (
    <div>
        <Table 
            columns={columns}
            dataSource={data}
            pagination={false}
            className="report-table"        >


        </Table>
    </div>
  )
}

export default FractTable