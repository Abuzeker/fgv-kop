import { Table } from 'antd'
import React from 'react'
import './tablestyle.css'; // Import your custom styles

const FractTable = ({ data }) => {
    console.log(data);
    // data = data.slice(0, -3);
    const processedData = data.map(entry => {
        const processedEntry = {};

        for (const key in entry) {
            const value = entry[key];

            if (!isNaN(value) && value !== "NaN") {
                processedEntry[key] = parseFloat(value).toFixed(2);
            } else {
                processedEntry[key] = "-";
            }
        }

        return processedEntry;
    });

    data = processedData(data)

    const columns = [

        {
            title: 'Date',
            dataIndex: 'date',
            key: 'Tarikh (ANALISIS HARIAN FRACTIONATION)',
            // render:(text,record) =>(
            //     <div>{ <span style={{ paddingLeft: '20px'}} >{text}</span> }</div>
            // )
        },
        {
            title: 'PO',
            dataIndex: 'PO (ANALISIS HARIAN FRACTIONATION)',
            key: 'PO (ANALISIS HARIAN FRACTIONATION)',
            // render:(text,record) =>(
            //     <div>{ <span style={{ paddingLeft: '20px'}} >{text}</span> }</div>
            // )
        },
        {
            title: 'PL',
            dataIndex: 'PL (ANALISIS HARIAN FRACTIONATION)',
            key: 'PL (ANALISIS HARIAN FRACTIONATION)',
            // render:(text,record) =>(
            //     <div>{ <span style={{ paddingLeft: '20px'}} >{text}</span> }</div>
            // )
        },
        {
            title: 'PS',
            dataIndex: 'PS (ANALISIS HARIAN FRACTIONATION)',
            key: 'PS (ANALISIS HARIAN FRACTIONATION)',
            // render:(text,record) =>(
            //     <div>{ <span style={{ paddingLeft: '20px'}} >{text}</span> }</div>
            // )
        },
        {
            title: 'YLD PL',
            dataIndex: 'YLD PL (ANALISIS HARIAN FRACTIONATION)',
            key: 'YLD PL (ANALISIS HARIAN FRACTIONATION)',
            // render:(text,record) =>(
            //     <div>{ <span style={{ paddingLeft: '20px'}} >{text}</span> }</div>
            // )
        },
        {
            title: 'YLD PS',
            dataIndex: 'YLD PS (ANALISIS HARIAN FRACTIONATION)',
            key: 'YLD PS (ANALISIS HARIAN FRACTIONATION)',
            // render:(text,record) =>(
            //     <div>{ <span style={{ paddingLeft: '20px'}} >{text}</span> }</div>
            // )
        },

        {
            title: 'UF',
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
                className="fract-table"
                bordered
            // scroll={{ x: 200, y: 350 }}
            >
            </Table>
        </div>
    )
}

export default FractTable