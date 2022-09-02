import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { userAction } from '../../constant';
import AddData from './AddData';
import EditData from './EditData';

const EditStocks = ({updateApiState}) => {
  const { itemId } = useParams();
  let navigate = useNavigate();

  useEffect(()=>{
    if(updateApiState===userAction.SUCCESS){
      return navigate('/')
    }
  },[updateApiState, navigate])

  if(updateApiState===userAction.REQUEST){
    return <h1>Updating Data</h1>
  }
  const formData = () => {
    if (itemId) {
      return <EditData itemId={itemId} />;
    }
  
    return <AddData />;
  }
  

  return (
    <div style={{display: 'flex', justifyContent: "center"}}>
      {formData()}
      </div>
  )
};

const mapStateToProps = (state) => {
  const { itemRateReducer } = state || {};
  const { updateApiState} = itemRateReducer || {};
  return {
    updateApiState
  }
}

export default connect(mapStateToProps)(EditStocks);
