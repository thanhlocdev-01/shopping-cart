import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImg2 from '../img/newlogo2.png';
import '../css/Header.css';

function Header() {
    const [Toggle, setToggle] = useState(false);
    const [Sticky, SetSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 10) {
            SetSticky(true);
        } else {
            SetSticky(false);
        }
    };
    window.addEventListener('scroll', handleScroll);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

    return (
        <>
            <header>
                <div className="container">
                    <div className={`nav-container ${Sticky ? 'cont-sticky' : ''}`}>
                        <div className="menu" onClick={() => setToggle(!Toggle)}>
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                        <div className="nav-logo">
                            <Link to="/">
                                <img onClick={scrollToTop} src={LogoImg2} alt="logo"></img>
                            </Link>
                        </div>
                        <nav>
                            <ul className={Toggle ? 'toggle' : ''} onClick={() => setToggle(false)}>
                                <li>
                                    <Link to="/">CATEGORIES</Link>
                                </li>
                                <li>
                                    <Link to="/">PRODUCT PAGE</Link>
                                </li>
                                <li className="close">
                                    <FontAwesomeIcon icon={faXmark} />
                                </li>
                            </ul>
                            <div className="nav-cart">
                                <span>0</span>
                                <Link to="/cart" className="cart">
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;
