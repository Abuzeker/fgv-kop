import { Breadcrumb, Card, Col, Layout, Menu, Row, ConfigProvider, Statistic, Collapse, Button, Divider, Carousel } from 'antd';
import TopCard from './TopCPOCard';
import './style.css'; // Import your custom styles
import UtilizationCarosel from './UtilizationCarosel';
import MarqueeCard from './MarqueCard';
import PurchaseOrderProgress from '../Description/PurchaseOrderProgress';

const { Header, Content, Footer } = Layout;

const Dashboard2 = () => {
    return (
        <Layout className="layout">
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >

                <span style={{ color: 'yellow', fontSize: '30px', fontWeight: 'bold' }}>Kuantan Oil Product (KOP)</span>

                {/* <MarqueeCard data={DataArray}></MarqueeCard> */}
            </Header>
            <Content
                style={{
                    padding: '0px 50px 0px 50px',
                    backgroundColor: '#141414',
                    // opacity:0.6
                }}
            >
                <div >

                    <PurchaseOrderProgress />
    
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                    backgroundColor: '#141414'
                }}
            >
                <span style={{ color: 'white' }}>
                FGVR KOP ©2023 Created by IOTCS
                </span>
            </Footer>
        </Layout>
    );
}

export default Dashboard2;
