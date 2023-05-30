import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Categories from './pages/Categories';
import Navbar from './components/Header';
import CategoriesAll from './components/CategoriesPages/CategoriesAll'

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route index path="/" element={<Home />} />

                <Route path="categories" element={<Categories />}>
                    <Route path="all" element={<CategoriesAll/>} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
