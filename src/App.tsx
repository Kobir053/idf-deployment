import React from 'react';
import './App.css';
import MissionCompleted from './components/MissionCompleted';
import UnitList from './components/UnitList';
import { useGlobalContext } from './context/DeploymentContext';

const App: React.FC = () => {

    const {units, setUnitStatus} = useGlobalContext();

    const refreshStatuses = () => {
      Object.keys(units).forEach((key: string) => {setUnitStatus(key, "Pending")});
    }

    return (
        <div className='app' style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>מעקב פריסת יחידות צה"ל</h1>
            <button onClick={refreshStatuses}>Refresh status of all units</button>
            <UnitList/>
            <MissionCompleted/>
        </div>
    );
};

export default App;