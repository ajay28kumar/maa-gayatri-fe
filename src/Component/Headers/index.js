import { connect } from 'react-redux';
import LoggedInHeader from './LoggedInHeader';
import LoginHeader  from './LoginHeader';

const Header = ({isLoggedIn, userDetails}) => {
    const headerComponent  = () =>{
        if(isLoggedIn) {
            return <LoggedInHeader/>
        }
        return <LoginHeader userDetails={userDetails}/>
    }
    
    return <div style={{marginBottom: 16}}>
        {headerComponent()}
    </div>
}

const mapStateToProps = state => {
    const { userProfile } = state || {};
    const {isLoggedIn, userDetails} = userProfile
    return {
        isLoggedIn, 
        userDetails
    }
}

export default connect(mapStateToProps)(Header);