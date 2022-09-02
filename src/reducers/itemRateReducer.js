import { actionType, userAction } from '../constant';

const initState = {
  data: {},
  apiState: '',
  updateApiState: '',
};

const itemRateReducer = (state = initState, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case actionType.GET_ALL_DATA_SUCCESS:
      return {
        ...state,
        apiState: userAction.SUCCESS,
        data: {
          ...state.data,
          ...payload,
        },
      };
    case actionType.UPDATE_DATA_REQUEST:
      return {
        ...state,
        updateApiState: userAction.REQUEST
      }
    case actionType.UPDATE_DATA_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          [payload.id]: payload,
        },
        updateApiState: userAction.SUCCESS
      };
    case actionType.UPDATE_DATA_RESET:
      return {
        ...state,
        updateApiState: '',
      };
    default:
      return state;
  }
};

export default itemRateReducer;
