import React from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import ListedBooks from './pages/ListedBooks';
import PagesToRead from './pages/PagesToRead';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                <Nav></Nav>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
           
        </div>
    );
};

export default MainLayout;