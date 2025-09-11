import React, { Suspense, lazy } from 'react';

const ComponentMap = {
  '/': lazy(() => import('../pages/Home')),
  '/affiliates': lazy(() => import('../pages/Affiliates')),
  '/contact': lazy(() => import('../pages/ContactUs')),
  '/candy-shake': lazy(() => import('../pages/CandyShake')),
  '/order-page/:id': lazy(() => import('../pages/OrderPage')),
  '/card': lazy(() => import('../pages/Card')),
  '/checkout': lazy(() => import('../pages/CheckOut')),
};

const NotFound = lazy(() => import('../pages/NotFound'));

export const LazyComponents = ({ path }) => {
  const resolvedPath = path || '/';
  const Component = ComponentMap[resolvedPath];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {Component ? <Component /> : <NotFound />}
    </Suspense>
  );
};
