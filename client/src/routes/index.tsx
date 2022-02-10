import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Browser from '@layouts/browser';
import NotFound from '@pages/not-found';

const AuthRoutes = lazy(() => import('./auth-routes'));
const PrivateRoutes = lazy(() => import('./private-routes'));

const RootRouter: React.FC = () => {
    return (
        <Suspense fallback={<>...</>}>
            <Browser>
                <Routes>
                    <Route path="auth/*" element={<AuthRoutes />} />
                    <Route path="-/*" element={<PrivateRoutes />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Browser>
        </Suspense>
    );
};

export default RootRouter;
