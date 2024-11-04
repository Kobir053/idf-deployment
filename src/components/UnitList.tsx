import { useGlobalContext } from '../context/DeploymentContext';
import ChangeStatus from './ChangeStatus';
import UnitStatus from './UnitStatus';
import '../styles/unitList.css';
const UnitList: React.FC = () => {

    const {units} = useGlobalContext();

    return (
        <div className='unit-list'>
            <h2>רשימת יחידות</h2>
            {Object.keys(units).map((key: string, index: number) => {
              return <div>
                <UnitStatus unitName={key} key={index}/>
                <ChangeStatus unitName={key}/>
              </div>
            })}
        </div>
    );
};

export default UnitList;