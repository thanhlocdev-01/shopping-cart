import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function CategoriesHeader() {
    const [btnName, setBtnName] = useState('All');

    const handleBtnName = (e) => {
        setBtnName(e);
    };
    return (
        <>
            <div className="container">
                <div className="categories-header">
                    <div className="title-home">
                        <Link onClick={() => window.scrollTo(0, 0)} to="/">
                            <FontAwesomeIcon icon={faAngleLeft} /> Home
                        </Link>
                        <h3>{btnName}</h3>
                    </div>
                    <div className="filter-btns">
                        <NavLink
                            to="all"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            onClick={() => handleBtnName('all')}
                        >
                            <button>All</button>
                        </NavLink>
                        <NavLink
                            to="furnitures"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            onClick={() => handleBtnName('furnitures')}
                        >
                            <button>Furnitures</button>
                        </NavLink>
                        <NavLink
                            to="electronics"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            onClick={() => handleBtnName('electronics')}
                        >
                            <button>Electronics</button>
                        </NavLink>
                        <NavLink
                            to="lamps"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            onClick={() => handleBtnName('lamps')}
                        >
                            <button>Lamps</button>
                        </NavLink>
                        <NavLink
                            to="kitchen"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            onClick={() => handleBtnName('kitchen')}
                        >
                            <button>Kitchen</button>
                        </NavLink>
                        <NavLink
                            to="chairs"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            onClick={() => handleBtnName('chairs')}
                        >
                            <button>Chairs</button>
                        </NavLink>
                        <NavLink
                            to="skin-care"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            onClick={() => handleBtnName('skin care')}
                        >
                            <button>Skin Care</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoriesHeader;
