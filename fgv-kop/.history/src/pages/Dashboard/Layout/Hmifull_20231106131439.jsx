import React from 'react'
import './hmitest.css'; // Import the CSS file
import Deodorising from '../../../HMI/L1000/Deodorising';
import Sdtest from '../../../HMI/L1500/Sdtest';


const Hmifull = () => {
  return (
    <div className=''>
        <Deodorising/>
        {/* <Sdtest/> */}
    </div>
  )
}

export default Hmifull