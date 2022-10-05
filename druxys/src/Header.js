import './App.css';
import logo from './components/Logo.png'

function Header() {
return (
    <div className = "header">
        <div className = "headerLogo">
            <img src = {logo} />
        </div>
    </div>
);
}

export default Header;
  