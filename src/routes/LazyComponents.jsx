import React, { Suspense, lazy } from 'react';

const ComponentMap = {
  '/': lazy(() => import('../pages/Home')),
  '/contact': lazy(() => import('../pages/ContactUs')),
  '/order-page/:id': lazy(() => import('../pages/OrderPage')),
  '/card': lazy(() => import('../pages/Card')),
  '/checkout': lazy(() => import('../pages/CheckOut')),
  '/category': lazy(() => import('../pages/Categories')),
  '/blog': lazy(() => import('../pages/Blog')),
  '/about-us': lazy(() => import('../pages/AboutUs')),
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
