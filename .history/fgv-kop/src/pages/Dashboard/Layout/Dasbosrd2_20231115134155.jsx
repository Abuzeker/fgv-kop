import { Breadcrumb, Card, Col, Layout, Menu, Row, ConfigProvider, Statistic, Collapse, Button, Divider, Carousel } from 'antd';
import TopCard from './TopCard';
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
                    backgroundColor: '#141414'

                }}
            >
                <MarqueeCard></MarqueeCard>
            </Header>
            {/* <TopCard></TopCard> */}
            <Content
                style={{
                    padding: '0px 50px 0px 50px',
                    backgroundColor: '#141414',
                    // opacity:0.6
                }}
            >
                <div >
                    <TopCard></TopCard>

                    <Carousel fade={true} autoplay autoplaySpeed={10000} >
                        <PurchaseOrderProgress />
                        {/* <div>
                            <Divider orientation='left'>Daily Operational Report</Divider>
                            <UtilizationCarosel />
                        </div> */}
                    </Carousel>
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                    backgroundColor: '#141414'
                }}
            >
                FGV KOP ©2023 Created by IOTCS
            </Footer>
        </Layout>
    );
}

export default Dashboard2;
