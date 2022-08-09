import LoggedInHeader from './LoggedInHeader';
import LoginHeader  from './LoginHeader';

const Header = () => {
    const isLoggedIn = !!localStorage.getItem("loginToken");
    if(isLoggedIn) {
        return <LoggedInHeader/>
    }
    return <LoginHeader/>
}

export default Header;