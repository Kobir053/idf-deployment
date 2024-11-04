import React from 'react';
import { useGlobalContext } from '../context/DeploymentContext';
import { Status } from '../data/Statuses';

const MissionCompleted: React.FC = () => {

    const { units } = useGlobalContext();
    const allComplete = Object.values(units).every(status => status === Status[Status.length-1]);

    return (
        <div>
            {allComplete && <h2>כל היחידות הושלמו בהצלחה!</h2>}
        </div>
    );
};

export default MissionCompleted;