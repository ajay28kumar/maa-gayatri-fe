import { useParams } from 'react-router-dom';
import AddData from './AddData';
import EditData from './EditData';

const EditStocks = () => {
  const { itemId } = useParams();
  if (itemId) {
    return <EditData itemId={itemId} />;
  }
  return <AddData />;
};

export default EditStocks;
