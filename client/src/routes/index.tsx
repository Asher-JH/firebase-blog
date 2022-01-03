import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import NotFound from '@pages/not-found';

const AuthRoutes = lazy(() => import('./auth-routes'));
const PrivateRoutes = lazy(() => import('./private-routes'));

const RootRouter: React.FC = () => {
    return (
        <Suspense fallback={<>...</>}>
            <Routes>
                <Route path="auth/*" element={<AuthRoutes />} />
                <Route path="-/*" element={<PrivateRoutes />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};

export default RootRouter;
