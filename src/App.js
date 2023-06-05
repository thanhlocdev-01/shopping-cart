import { React, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Categories from './pages/Categories';
import Navbar from './components/Navbar';
import CategoriesAll from './components/CategoriesPages/CategoriesAll';
import Furnitures from './components/CategoriesPages/Furnitures';
import Electronics from './components/CategoriesPages/Electronics';
import Lamps from './components/CategoriesPages/Lamps';
import Kitchen from './components/CategoriesPages/Kitchen';
import Chairs from './components/CategoriesPages/Chairs';
import SkinCare from './components/CategoriesPages/SkinCare';
import ProductPage, { CartContext } from './pages/ProductPage';

function App() {
    const [cartItem, setCartItem] = useState([]);

    const addToCart = (item) => {
        setCartItem([...cartItem, item]);
    };

    // local storage
    useEffect(() => {
        const json = localStorage.getItem('cartItem');
        const savedCart = JSON.parse(json);
        if (savedCart) {
            setCartItem(savedCart);
        }
    }, []);

    useEffect(() => {
        const json = JSON.stringify(cartItem);
        localStorage.setItem('cartItem', json);
    }, [cartItem]);
    return (
        <CartContext.Provider value={{ cartItem, addToCart, setCartItem }}>
            <Navbar />
            <Routes>
                <Route index path="/" element={<Home />} />

                <Route path="categories" element={<Categories />}>
                    <Route path="all" element={<CategoriesAll />} />
                    <Route path="furnitures" element={<Furnitures />} />
                    <Route path="electronics" element={<Electronics />} />
                    <Route path="lamps" element={<Lamps />} />
                    <Route path="kitchen" element={<Kitchen />} />
                    <Route path="chairs" element={<Chairs />} />
                    <Route path="skin-care" element={<SkinCare />} />
                </Route>
                <Route path="categories/product/:id" element={<ProductPage />} />
            </Routes>
        </CartContext.Provider>
    );
}

export default App;
