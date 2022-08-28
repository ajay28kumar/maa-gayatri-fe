import { actionType, userAction } from "../constant";

const initState = {
    apiState: "",
    isLoggedIn: false,
    userDetails: {}
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
            const {user} = payload;
            const {auth} = user || {}
            const {currentUser} = auth || {};
            console.log( "payload is : ", currentUser);
            const {displayName, email,photoURL} = currentUser || {}
            return {
                ...state,
                apiState: userAction.SUCCESS, 
                isLoggedIn: !!auth,
                userDetails: {displayName, email,photoURL}

            }
            default:
                return state;
    }
}

export default userProfile;
