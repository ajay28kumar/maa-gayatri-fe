import { actionType, userAction } from "../constant"

const logoutAction = (response) => (dispatch) => { 
    switch(response.apiState){
        case userAction.REQUEST:
            return dispatch({type: actionType.USER_LOGOUT_REQUEST})
        case userAction.SUCCESS:
            return dispatch({type: actionType.USER_LOGOUT_SUCCESS})
        case userAction.ERROR:
            return dispatch({type: actionType.USER_LOGOUT_ERROR})
        default:
            return;
    }
};

export default logoutAction;
