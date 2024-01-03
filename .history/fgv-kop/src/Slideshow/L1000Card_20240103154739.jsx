import React, { useEffect, useState } from 'react';
import HMIWrapper from './HMIWrapper';
import Deodorising from '../HMI/L1000/Deodorising';
import BleachingHMI from '../HMI/L1000/BleachingHMI';
import FiltrationHMI from '../HMI/L1000/FiltrationHMI';
import VacuumHMI from '../HMI/L1000/VacuumHMI';
import G331AHMI from '../HMI/L1000/G331AHMI';
import G331BHMI from '../HMI/L1000/G331BHMI';

const tabs = ['Deodorising', 'Bleaching', 'Filtration', 'Vacuum', 'G331A', 'G331B'];

const L1000Card = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      request_realtime();
    }, 5000);

    const changingInterval = setInterval(() => {
      const currentIndex = tabs.indexOf(activeTab);
      const nextIndex = (currentIndex + 1) % tabs.length;
      setActiveTab(tabs[nextIndex]);
    }, 15000);

    return () => {
      clearInterval(interval);
      clearInterval(changingInterval);
    };
  }, [activeTab]);

  const request_realtime = async () => {
    // ... your existing code for fetching data

    // setState(({ count }) => ({ count: count + 1 }));
  };

  return (
    <div>
      <HMIWrapper Tab={tabs}>
        {tabs.map(tab => (
          <React.Fragment key={tab}>
            {activeTab === tab && (
              <>
                {tab === 'Deodorising' && <Deodorising key={tab} value={L1000_deo} />}
                {tab === 'Bleaching' && <BleachingHMI key={tab} value={L1000_bleaching} />}
                {tab === 'Filtration' && <FiltrationHMI key={tab} value={L1000_Filter} />}
                {tab === 'Vacuum' && <VacuumHMI key={tab} value={L1000_Vacuum} />}
                {tab === 'G331A' && <G331AHMI key={tab} value={L1000_G331A} />}
                {tab === 'G331B' && <G331BHMI key={tab} value={L1000_G331B} />}
              </>
            )}
          </React.Fragment>
        ))}
      </HMIWrapper>
    </div>
  );
};

export default L1000Card;
