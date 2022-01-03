import React from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

import SignIn from '@pages/sign-in';
import SignUp from '@pages/sign-up';
import NotFound from '@pages/not-found';

const AuthRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Outlet />}>
                <Route index element={<Navigate to="sign-up" />} />
                <Route path="sign-in" element={<SignIn />} />
                <Route path="sign-up" element={<SignUp />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default AuthRoutes;
