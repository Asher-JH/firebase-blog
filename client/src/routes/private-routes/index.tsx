import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import NotFound from '@pages/not-found';

const PrivateRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Outlet />}>
                <Route index element={<>Home</>} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default PrivateRoutes;
