import { actionType, userAction } from '../constant';

const initAppAction = (response) => (dispatch) => {
  switch (response.apiState) {
    case userAction.REQUEST:
      return dispatch({
        type: actionType.USER_LOGIN_REQUEST,
        payload: response,
      });
    case userAction.SUCCESS:
      return dispatch({
        type: actionType.USER_LOGIN_SUCCESS,
        payload: response,
      });
    case userAction.ERROR:
      return dispatch({ type: actionType.USER_LOGIN_ERROR, payload: response });
    default:
      return;
  }
};

export default initAppAction;
