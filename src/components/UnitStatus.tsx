import { useGlobalContext } from '../context/DeploymentContext';

type UnitStatusProps = {
    unitName: string;
};

const UnitStatus: React.FC<UnitStatusProps> = ({ unitName }) => {

    const { units } = useGlobalContext();

    return <p>{unitName}: {units[unitName]}</p>;
};

export default UnitStatus;