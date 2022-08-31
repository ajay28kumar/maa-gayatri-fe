import DataForm from './DataForm';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { userAction } from '../../constant';
import getData from '../../action/getData';
import updateData from '../../action/updateData';

const EditData = ({ apiState, data, getDataAction, updateDataAction }) => {
  useEffect(() => {
    if (apiState !== userAction.SUCCESS) {
      getDataAction();
    }
  }, [apiState, getDataAction]);

  if (apiState !== userAction.SUCCESS) {
    return <h1>Loading ... </h1>;
  }

  const { brand, category, others, rate, unit, stockStore } = data || {};

  const updateAction = (stockRes) => {
    console.log('stockData : ', stockRes);
    return updateDataAction({
      ...data,
      ...stockRes,
    });
  };

  return (
    <DataForm
      brandDetail={brand}
      categoryDetail={category}
      otherDetails={others}
      rateDetail={rate}
      unitDetail={unit}
      remainingStock={stockStore}
      onSubmitAction={(stockData) => updateAction(stockData)}
    />
  );
};

const mapStateToProps = (state, otherProps) => {
  const { itemId } = otherProps || {};
  const { itemRateReducer } = state || {};
  const { apiState, data } = itemRateReducer || {};
  console.log('getData : ', data[itemId]);
  return {
    apiState,
    data: data[itemId],
  };
};

export default connect(mapStateToProps, {
  getDataAction: getData,
  updateDataAction: updateData,
})(EditData);
