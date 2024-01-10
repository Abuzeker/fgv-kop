import React from 'react'

import { Breadcrumb, Card, Col, Layout, Menu, Row, theme, Statistic, Collapse, Button, Divider, Carousel, Table } from 'antd';
import TopCPOCard from './TopCPOCard';
import './style.css'; // Import your custom styles
import DailyReporttable from '../Table/DailyReporttable';
import UtilizationCarosel from './UtilizationCarosel';
import MarqueeCard from './MarqueCard';
import PerformanceCarosel from './PerformanceCarosel';
import { useState } from 'react';
import { Request_Realtime, Request_dailydata_log, Request_data_log, Request_order_log } from '../../../api';
import { useEffect } from 'react';

import {
    Individual_Product, MergeAssetandProductLog, MergeOrderandProduct, MergeProductProgress, MergeProducttoAsset, Merge_attainment_to_details, Merge_quatity, OrderInfoRawDataProcess, TenDaysbeforesRange,
    aggregateAndSortData, chunkArray, filter_unfinish_order, filter_unfinish_order_name, getMonthsRange,
    getNext10DaysRange, merge_log_and_order
} from '../../../DataRequest/LogdataProcess';

import { Caculate_ShipmentCompletion, Find_Latest_data, Find_Latest_data_CPKO, Find_Latest_data_CPO, Find_Latest_data_RBDPO, Sort_Log_by_date, extractData, findHighestTodateCPO } from '../../../DataRequest/UtilityProcess';
import Barchart from '../Graph/Barchart';
import BarchartWithColor from '../Graph/BarchartWithColor';
import Utilitytable from '../Table/Utilitytable';
import TopCPKOCard from './TopCardCPKO';
import TopRBDPOCard from './TopRDBPOCard';
import PlantProcessingStatus from './PlantProcessingStatus';


const { Header, Content, Footer } = Layout;


const columns = [
    {
        title: '80% - 100%',
        dataIndex: '1',
        key: '1',
        width: 100,
        fixed: 'left',
    },
    {
        title: '40% - 80%',
        dataIndex: '2',
        key: '2',
        width: 100,
        fixed: 'left',
    },
    {
        title: '<40%',
        dataIndex: '3',
        key: '3',
        width: 100,
        fixed: 'left',
    },
]

const datalabel = [
    {
        '1':'asd'
    }

]

const Dashboard3 = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [state, setState] = useState({ count: 0 });

    const request_log = async () => {
        setState(({ count }) => ({ count: count + 1 }));
    }

    useEffect(() => {
        request_log()
        const interval = setInterval(() => {
            request_log()
        }, 300000)

        return () => {
            clearInterval(interval)
            console.log('Unmount Effect Line1RT');
        }

    }, [])

    return (
        <Layout className="layout">
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >

                <span style={{ color: 'yellow', fontSize: '30px', fontWeight: 'bold' }}>Kuantan Oil Product (KOP)</span>
            </Header>

            <Content
                style={{
                    padding: '0px 50px 0px 50px',
                    backgroundColor: '#141414',

                }}
            >
                <Table
                    bordered
                    style={{
                        backgroundColor: '#292828',
                        color: 'white',
                    }}
                    className="report-table"
                    pagination={false}
                    columns={columns}
                    dataSource={datalabel}
                    size="medium"
                    scroll={{ x: 970, y: 350 }}
                />

                <PlantProcessingStatus></PlantProcessingStatus>

            </Content>

            <Footer
                style={{
                    textAlign: 'center',
                    backgroundColor: '#141414'
                }}
            >
                <span style={{ color: 'white' }}>
                    FGV KOP ©2023 Created by IOTCS

                </span>
            </Footer>
        </Layout>
    )
}

export default Dashboard3