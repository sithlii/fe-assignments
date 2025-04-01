import { Component } from "react";
import '../styles/Footer.scss';

class Footer extends Component {
    render() {
        return <div className="footer">
            <div className="socials">
                <a href="https://www.facebook.com/OfficialOldSchoolRuneScape/">Facebook</a>
                <a href="https://www.instagram.com/oldschool.runescape/">Instagram</a>
                <a href="https://x.com/OldSchoolRS?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">Twitter</a>
            </div>
            <p>Copyright 2025</p>
        </div>;
    }
}

export default Footer;
