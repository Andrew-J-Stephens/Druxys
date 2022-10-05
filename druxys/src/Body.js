import './App.css';
import logo from './components/Logo.png'
import { SiUbereats, SiDoordash, SiRos} from 'react-icons/si';
import Dropdown from './Dropdown';
import Slideshow from './Slideshow';
import trio from './components/trio.png';

function Header() {
return (
    <div className = "body">

        <div className = "trio">
            <img src = {trio} />
            <div className = "location">
                FIND A LOCATION
            </div>
        </div>

        <div className = "links">
            <div className = "link">
                <SiUbereats />
            </div>
            <div className = "link">
                <SiDoordash />
            </div>
            <div className = "link">
                <SiRos />
            </div>
        </div>


        <div className = "descriptions">
            <div className='dropdownContainer'>
            <div className='dropdown'>
                <Dropdown />
            </div>
            </div>
        </div>
    </div>
);
}

export default Header;
  