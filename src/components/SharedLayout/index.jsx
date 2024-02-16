import Header from 'components/Header';
import Loader from 'components/Loader';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoading } from '../../redux/catalogSelectors';

function SharedLayout() {
  const loading = useSelector(selectIsLoading);

  return (
    <>
      <Header />
      <main>
        {loading && <Loader />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default SharedLayout;
