import AppRoute from "./Router";
import { connect } from "react-redux";
import initAppAction from './action/initAppAction';
import LoginLoader from './Component/LoginLoader'


const AppUI = ({apiState}) => {
    if(apiState !== ""){
        return <AppRoute/>
    }
    return (
        <LoginLoader/>
    )
}

const mapStateToProps = state => {
    const { userProfile } = state || {};
    const {apiState} = userProfile
    return {
        apiState
    }
}

export default connect(mapStateToProps, {initAppAction})(AppUI);
