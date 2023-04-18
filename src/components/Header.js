import logo from '../images/logo.svg';

function Header(){
    return (
        <header className="header">
            <img src={logo} alt="Надписи Место и Россия." className="header__logo"/>
        </header>
    )
}

export default Header;
