import React from 'react';
import Home from '../views/home';
import NotFound from '../views/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MainRoutes = () => {
    const baseForRouter = import.meta.env.BASE_URL;

    return (
        <>
            <BrowserRouter basename={baseForRouter}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default MainRoutes;
