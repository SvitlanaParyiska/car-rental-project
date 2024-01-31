import Header from 'components/Header';
import Loader from 'components/Loader';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function SharedLayout() {
  return (
    <>
      <Header />
      <main>
        {/* {loading && <Loader />} */}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default SharedLayout;
