import { actionType, userAction } from "../constant";

const initState = {
    apiState: "",
    isLoggedIn: true,
    userName: '',
};


const userProfile = (state=initState,action) => { 
    const {type, payload} = action || {}
    switch(type){
        case actionType.USER_LOGIN_REQUEST:
            return {
                ...state,
                apiState: userAction.REQUEST,
            }
        case actionType.USER_LOGIN_SUCCESS:
            const {isLoggedIn, userName} = payload || {}
            return {
                ...state,
                apiState: userAction.SUCCESS, 
                isLoggedIn, 
                userName
            }
            default:
                return state;
    }
}

export default userProfile;
