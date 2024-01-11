import { Breadcrumb, Card, Col, Layout, Menu, Row, ConfigProvider, Statistic, Collapse, Button, Divider, Carousel } from 'antd';
import TopCard from './TopCPOCard';
import './style.css'; // Import your custom styles
import UtilizationCarosel from './UtilizationCarosel';
import MarqueeCard from './MarqueCard';
import PurchaseOrderProgress from '../Description/PurchaseOrderProgress';

const { Header, Content, Footer } = Layout;

const Dashboard2 = () => {
    return (
        <div >
            <PurchaseOrderProgress />
        </div>
    );
}

export default Dashboard2;
