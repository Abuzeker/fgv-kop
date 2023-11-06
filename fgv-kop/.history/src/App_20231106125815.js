// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bleaching from './pages/L1500/Bleaching';
import L1500 from './pages/L1500/L1500';
import CPO from './pages/Dashboard/CPO/CPO'
import L1500Slide from './Slideshow/L1500Slide';
import L1500Card from './Slideshow/L1500Card';
import Deodorising from './HMI/L1000/Deodorising';
import Hmifull from './pages/Dashboard/Layout/Hmifull';

const App = () => {
  return (
    // <div>
    //   <CPO></CPO>
    // </div>
    <Router>
      <Routes>
        <Route path="/pages/L1500/Slide" element={<L1500Slide />} />
        <Route path="/pages/Dashboard/CPO" element={<CPO />} />
        <Route path="/pages/L1500/Card" element={<L1500Card />} />
        <Route path='/pages/hmi/full' element={<Hmifull/>}/>
        
      </Routes>
    </Router>
  );
};

export default App;
