import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../pages/ProductPage';
import CartWithItem from './CartWithItem';
import EmptyCart from './EmptyCart';
import LogoImg2 from '../img/newlogo2.png';
import '../css/Header.css';

function Navbar() {
    const [Toggle, setToggle] = useState(false);
    const [Sticky, SetSticky] = useState(false);

    const [cart, setCart] = useState(false);
    const { cartItem } = useContext(CartContext);

    const handleScroll = () => {
        if (window.scrollY >= 10) {
            SetSticky(true);
        } else {
            SetSticky(false);
        }
    };

    const openCart = () => {
        setCart(!cart);
    };

    window.addEventListener('scroll', handleScroll);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {/* overlay */}
            <div onClick={openCart} className={`page-overlay ${cart ? 'open-flex' : 'closed-flex'}`}></div>

            {/* cart */}
            <div className={`cart-div ${cart ? 'open-cart' : 'closed-cart'}`}>
                <div className="cart-title-btn">
                    <h2 className="cart-full-h2">Your Shopping Cart ({cartItem.length})</h2>
                    <FontAwesomeIcon onClick={openCart} icon={faXmark} />
                </div>

                <div className="cart-body">
                    {cartItem.length < 1 ? <EmptyCart openCart={openCart} /> : <CartWithItem />}
                </div>
            </div>
            <header>
                <div className="container">
                    <div className={`nav-container ${Sticky ? 'cont-sticky' : ''}`}>
                        <div className="menu" onClick={() => setToggle(!Toggle)}>
                            <FontAwesomeIcon icon={faBars} className="menu-bars" />
                        </div>
                        <div className="nav-logo">
                            <Link to="/">
                                <img onClick={scrollToTop} src={LogoImg2} alt="logo"></img>
                            </Link>
                        </div>
                        <nav>
                            <ul className={Toggle ? 'toggle' : ''} onClick={() => setToggle(false)}>
                                <li>
                                    <Link to="/categories/all">CATEGORIES</Link>
                                </li>
                                <li>
                                    <Link to="/categories/product/1">PRODUCT PAGE</Link>
                                </li>
                                <li className="close">
                                    <FontAwesomeIcon icon={faXmark} className="menu-close" />
                                </li>
                            </ul>
                            <div className="nav-cart">
                                <div className="cart">
                                    <sapn
                                        data-array-length={cartItem.length}
                                        onClick={openCart}
                                        className={`${cartItem.length < 1 ? 'cart-icon' : 'cart-icon with-items'}`}
                                    ></sapn>
                                    <FontAwesomeIcon
                                        data-array-length={cartItem.length}
                                        onClick={openCart}
                                        className={`${cartItem.length < 1 ? 'cart-icon' : 'cart-icon with-items'}`}
                                        icon={faCartShopping}
                                    />
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Navbar;
