import React from 'react';
import { useGlobalContext } from '../context/DeploymentContext';
import { Status } from '../data/Statuses';

type ChangeStatusProps = {
    unitName: string;
};

const ChangeStatus: React.FC<ChangeStatusProps> = ({ unitName }) => {

    const { setUnitStatus, units } = useGlobalContext();

    const progress = (): string => {
        if(units[unitName] == Status[Status.length-1]) return units[unitName];
        const statusIndex = Status.findIndex((s) => s === units[unitName]);
        return Status[statusIndex+1];
    }

    return (
        <button onClick={() => setUnitStatus(unitName, progress())}>
            progress {unitName}
        </button>
    );
};

export default ChangeStatus;