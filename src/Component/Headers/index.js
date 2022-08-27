import LoggedInHeader from './LoggedInHeader';
import LoginHeader  from './LoginHeader';

const Header = () => {
    const isLoggedIn = !!localStorage.getItem("loginToken");
    const headerComponent  = () =>{
        if(isLoggedIn) {
            return <LoggedInHeader/>
        }
        return <LoginHeader/>
    }
    
    return <div style={{marginBottom: 16}}>
        {headerComponent()}
    </div>
}

export default Header;