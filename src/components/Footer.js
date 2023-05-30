import '../css/Footer.css';
import {Link} from 'react-router-dom'
function Footer() {
    return (
        <>
            <footer>
                <div className="footer-links">
                        <Link to='/'>About</Link>
                        <Link to='/'>FAQs</Link>
                        <Link to='/'>News</Link>
                        <Link to='/'>Contact Us</Link>
                </div>
            </footer>
        </>
    );
}

export default Footer;
