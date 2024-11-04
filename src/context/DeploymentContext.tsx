import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Units } from '../types/deployment';

interface DeploymentProviderProps {
    children: ReactNode;
}

// הגדרת סוג המידע עבור הקשר הפריסה
type DeploymentContextType = {
    units: Units;
    setUnitStatus: (unit: string, status: string) => void;
};

// יצירת ההקשר
const DeploymentContext = createContext<DeploymentContextType>({
    units: {},
    setUnitStatus: () => {}
});

const DeploymentProvider: React.FC<DeploymentProviderProps> = ({ children }) => {
    // הגדרת מצב התחלתי
    const [units, setUnits] = useState({ Golani: 'Idle', Paratroopers: 'Idle', Givati: 'Idle', cannonians: 'Idle', nany: 'Idle' });

    // פונקציה לשינוי מצב היחידות
    const setUnitStatus = (unit: string, status: string) => {
        setUnits((prev) => {return {...prev, [unit]: status}});
    };

    return (
        <DeploymentContext.Provider value={{ units, setUnitStatus }}>
            {children}
        </DeploymentContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(DeploymentContext);
}

export { DeploymentContext, DeploymentProvider };