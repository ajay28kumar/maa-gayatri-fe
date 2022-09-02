import DataForm from './DataForm';
import { connect } from 'react-redux';
import addData from '../../action/addData';

const AddData = ({addDataAction}) => {
  const handleSubmit = async (stockData) => {
    addDataAction(stockData);
  };
  return <DataForm onSubmitAction={handleSubmit} />;
};


export default connect(null, {addDataAction: addData})(AddData);
