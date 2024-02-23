import { Table } from 'antd'
import React from 'react'
import './tablestyle.css'; // Import your custom styles
import { mockRemark } from '../../../MockData/LineMock';

const RemarkTable = (props) => {

    const cssstyle = props.plant === "Refining" ? "remark-table" : "fract-table"
    const remarkname = `${props.type} Remark`
    const Remark = []

    if (Array.isArray(props.data)) {
        const DaysWithRemark = props.data.filter(item => item && item.hasOwnProperty(remarkname));

        if (DaysWithRemark.length > 0) {
            DaysWithRemark.forEach(element => {
                const obj = {}
                obj['date'] = element['date']
                obj['Remark'] = element[remarkname]
                obj['value'] = element[props.type]
                Remark.push(obj)
            });
        } else {
            // Add a placeholder row
            Remark.push({ date: '-', value: '-', Remark: '-' });
        }
    }

    // Limit the number of rows to 7
    if (Remark.length > 7) {
        Remark.splice(0, Remark.length - 7);
    }

    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'Date',
            width: '120px',
        },
        {
            title: 'Value',
            dataIndex: 'value',
            key: 'value',
            width: '80px'
        },
        {
            title: 'Remark',
            dataIndex: 'Remark',
            key: 'Remark',
        },
    ]

    return (
        <div>
            <Table
                columns={columns}
                style={{
                    backgroundColor: '#292828',
                    color: 'white',
                    height: '350px' // Set the height to 600px
                }}
                className={cssstyle}
                pagination={false}
                dataSource={Remark}
                bordered
            />
        </div>
    )
}

export default RemarkTable
