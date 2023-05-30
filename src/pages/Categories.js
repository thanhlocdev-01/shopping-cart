import { Outlet } from 'react-router-dom';
import CategoriesHeader from '../components/CategoriesHeader';
import '../css/ProudProducts.css';

function Categories() {
    return (
        <>
            <CategoriesHeader />
            <Outlet />
        </>
    );
}

export default Categories;
