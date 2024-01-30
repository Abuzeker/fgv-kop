// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CPO from './pages/Dashboard/CPO/CPO'
import L1500Slide from './Slideshow/L1500Slide';
import L1500Card from './Slideshow/L1500Card';
import Hmifull from './pages/Dashboard/Layout/Hmifull';
import L1000Slide from './Slideshow/L1000Slide';
import L1000Card from './Slideshow/L1000Card';
import K4Slide from './Slideshow/K4Slide';
import K4Card from './Slideshow/K4Card';
import Dashboard2 from './pages/Dashboard/Layout/Dasbosrd2';
import TVDisplay from './pages/Dashboard/Layout/TVDisplay';
import Apitestpage from './pages/Dashboard/Layout/Apitestpage';
import { useEffect } from 'react';
import { Subscrition_request } from './api';
import { getFromLocalStorage, saveToLocalStorage } from './Memorystorage/localstorage';
import PlantProcessingStatus from './pages/Dashboard/Layout/PlantProcessingStatus';
import Dashboard3 from './pages/Dashboard/Layout/Dashboard3';
import { Button, Layout } from 'antd';
import Dashboard2_Layout from './pages/Dashboard/Layout/Dashboard2_Layout';
import Dashboard3_Layout from './pages/Dashboard/Layout/Dashboard3_Layout';
import Dashboard1_Layout from './pages/Dashboard/Layout/Dashboard1_Layout';
// const { Header, Content, Footer } = Layout;

const App = () => {
  const request_event = async () => {
    // console.log('login request');
    const response = await Subscrition_request()

    if (response.success) {
      saveToLocalStorage("KOP-Token", response.data.authentication.token)
    }

    const token = getFromLocalStorage("KOP-Token")
    // console.log(`Token ${token}`);
    // console.log(response);         
  }

  useEffect(() => {
    request_event()

    const interval = setInterval(() => {
      request_event()
    }, 300000)

    // console.log('render2');
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (

        <Router>
          <Routes>
            <Route path="/pages/L1500/Slide" element={<L1500Slide />} />
            <Route path="/pages/L1000/Slide" element={<L1000Slide />} />
            <Route path="/pages/KOPFRA4/Slide" element={<K4Slide />} />


            <Route path="/pages/L1500/Card" element={<L1500Card />} />
            <Route path="/pages/L1000/Card" element={<L1000Card />} />
            <Route path="/pages/KOPFRA4/Card" element={<K4Card />} />



            <Route path="/pages/Dashboard1" element={<Dashboard1_Layout />} />
            <Route path='/pages/hmi/full' element={<Hmifull />} />
            <Route path="/pages/Dashboard2" element={<Dashboard2_Layout />} />
            <Route path="/pages/testapi" element={<Apitestpage />} />
            <Route path="/pages/Dashboard3" element={<Dashboard3_Layout />} />



            <Route path="/pages/TV" element={<TVDisplay />} />



          </Routes>
        </Router>
  );
};

export default App;


