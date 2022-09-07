import DataForm from './DataForm';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { userAction } from '../../constant';
import getData from '../../action/getData';
import updateData from '../../action/updateData';
import deleteData from '../../action/deleteData';

const EditData = ({itemId, apiState, data, getDataAction, updateDataAction ,onDeleteAction}) => {
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
    return updateDataAction({
      ...data,
      ...stockRes,
    });
  };

  return (
    <DataForm
      itemId={!!itemId}
      brandDetail={brand}
      categoryDetail={category}
      otherDetails={others}
      rateDetail={rate}
      unitDetail={unit}
      remainingStock={stockStore}
      onSubmitAction={(stockData) => updateAction(stockData)}
      onDeleteAction={() => onDeleteAction(data)}
    />
  );
};

const mapStateToProps = (state, otherProps) => {
  const { itemId } = otherProps || {};
  const { itemRateReducer } = state || {};
  const { apiState, data } = itemRateReducer || {};
  return {
    apiState,
    data: data[itemId],
  };
};

export default connect(mapStateToProps, {
  getDataAction: getData,
  updateDataAction: updateData,
  onDeleteAction : deleteData
})(EditData);
