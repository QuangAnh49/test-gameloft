import logo from '../../assets/logo.svg';
import hamburger from '../../assets/hamburger.svg';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <img className="header-logo" src={logo} alt="logo" />
      <img className="header-hamburger" src={hamburger} alt="hamburger" />
    </div>
  );
};

export default Header;
