import { Table } from 'antd';
import React from 'react'
import moment from 'moment';

const generateColumns = () => {
  const daysInMonth = moment().daysInMonth();
  const columns = [];

  for (let day = 1; day <= daysInMonth; day++) {
    columns.push({
      title: moment().date(day).format('DD'),
      dataIndex: `day${day}`,
      key: `day${day}`,
    });
  }

  return columns;
};

const generateDataSource = () => {
  // Sample data, replace it with your actual data
  const data = [
    // Example data for each day
    { key: 1, day1: 'Data1', day2: 'Data2', /* ... */ },
    // Add more rows as needed
  ];

  return data;
};

const PlantProcessingStatus = () => {

//   const  data = []
  const columns = generateColumns();
  const data = generateDataSource();

  console.log(columns);

    return (
        // <div>
        //     <Table
        //         bordered
        //         style={{
        //             backgroundColor: '#292828',
        //             color: 'white',
        //         }}
        //         className="report-table"
        //         pagination={false}
        //         columns={columns}
        //         dataSource={data}
        //         size="medium"
        //         scroll={{ x: 970, y: 350 }}
        //     />
        // </div>
        <Table columns={columns} dataSource={data} />
    )
}

export default PlantProcessingStatus