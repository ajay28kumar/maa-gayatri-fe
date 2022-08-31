import { actionType } from '../constant';

const initState = {
  data: {},
  apiState: '',
};

const itemRateReducer = (state = initState, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case actionType.GET_ALL_DATA_SUCCESS:
      return {
        ...state,
        apiState: 'SUCCESS',
        data: {
          ...state.data,
          ...payload,
        },
      };
    case actionType.UPDATE_DATA_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          [payload.id]: payload,
        },
      };
    default:
      return state;
  }
};

export default itemRateReducer;
