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

const App = () => {
  return (
    // <div>
    //   <CPO></CPO>
    // </div>
    <Router>
      <Routes>
        <Route path="/pages/L1500/Slide" element={<L1500Slide />} />
        <Route path="/pages/L1000/Slide" element={<L1000Slide />} />
        {/* <Route path="/pages/KOPFRA4/Slide" element={<K4Slide />} /> */}


        <Route path="/pages/L1500/Card" element={<L1500Card />} />
        <Route path="/pages/L1000/Card" element={<L1000Card />} />
        {/* <Route path="/pages/KOPFRA4/Card" element={<K4Card />} /> */}



        <Route path="/pages/Dashboard/CPO" element={<CPO />} />
        <Route path='/pages/hmi/full' element={<Hmifull/>}/>
        
      </Routes>
    </Router>
  );
};

export default App;
