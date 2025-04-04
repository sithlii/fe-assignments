import { NavLink, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import '../styles/navigation.scss';

import Counter from '../components/Counter';
import ColorChanger from '../components/ColorChanger';
import FontSizer from '../components/FontSizer';
import Weather from '../components/WeatherWidget';
import RgbSlider from '../components/RGBSlider';
import ShowHide from '../components/ShowHide';
import ToggleGreeting from '../components/ToggleGreeting';

function Navigation() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <NavLink to="/">Home</NavLink>
                <div className="dropdown">
                    <button 
                        className="dropdown-button"
                        onClick={toggleDropdown}
                        aria-expanded={isDropdownOpen}
                    >
                        Widgets
                    </button>
                    {isDropdownOpen && (
                        <div className="dropdown-content">
                            <NavLink to="/counter" onClick={closeDropdown}>Counter</NavLink>
                            <NavLink to="/color-changer" onClick={closeDropdown}>Color Changer</NavLink>
                            <NavLink to="/font-sizer" onClick={closeDropdown}>Font Sizer</NavLink>
                            <NavLink to="/weather" onClick={closeDropdown}>Weather</NavLink>
                            <NavLink to="/rgb-slider" onClick={closeDropdown}>RGB Slider</NavLink>
                            <NavLink to="/show-hide" onClick={closeDropdown}>Show Hide</NavLink>
                            <NavLink to="/toggle-greeting" onClick={closeDropdown}>Toggle Greeting</NavLink>
                        </div>
                    )}
                </div>
            </div>
            <Switch>
                <Route path="/counter" component={Counter} />
                <Route path="/color-changer" component={ColorChanger} />
                <Route path="/font-sizer" component={FontSizer} />
                <Route path="/weather" component={Weather} />
                <Route path="/rgb-slider" component={RgbSlider} />
                <Route path="/show-hide" component={ShowHide} />
                <Route path="/toggle-greeting" component={ToggleGreeting} />
            </Switch>
        </nav>
    )
}

export default Navigation;
