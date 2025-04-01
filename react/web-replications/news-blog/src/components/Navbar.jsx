import {Component} from 'react';
import '../styles/Navbar.scss';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={'/osrslogo.png'} alt="logo" />
                </div>
                <div className="navbar-links">
                    <button className="navbar-link">Home</button>
                    <button className="navbar-link">Skills</button>
                    <button className="navbar-link">Quest Guides</button>
                    <button className="navbar-link">DPS Calculator</button>
                    <button className="navbar-link">Money Making</button>
                </div>
                <div className="navbar-logo">
                    <img src={'/osrslogo.png'} alt="logo" />
                </div>
            </div>
        );
    }
}

export default Navbar;