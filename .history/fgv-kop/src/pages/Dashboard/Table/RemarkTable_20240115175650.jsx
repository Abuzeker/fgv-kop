import { Table } from 'antd'
import React from 'react'
import './tablestyle.css'; // Import your custom styles
import { mockRemark } from '../../../MockData/LineMock';

const RemarkTable = (props) => {

    // console.log(props.data);

    const cssstyle = props.plant === "Refining" ? "remark-table":"fract-table"
    const remarkname = `${props.type} Remark`
    const Remark = []

    if (Array.isArray(props.data)) {
        const DaysWithRemark = props.data.filter(item => item && item.hasOwnProperty(remarkname));
      
        if (DaysWithRemark.length > 0) {
          console.log(props.type);
          console.log('Found:', DaysWithRemark);

          DaysWithRemark.forEach(element => {
            const obj ={}
            obj['date'] = element['date']
            obj['Remark'] = element[remarkname]
            obj['value'] = element[props.type]
            Remark.push(obj)
          });

        } 
        
        else {
          console.log('Not found');
        }
      } else {
        // console.error('Invalid data format. Expected an array.');
      }


    //   console.log(Remark);

    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'Date',
            width:'100px'
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
                dataSource={Remark}
                bordered
                >


                </Table>
        </div>
    )
}

export default RemarkTable