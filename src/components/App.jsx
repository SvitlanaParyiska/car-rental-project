import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';

import '../index.css';

import SharedLayout from './SharedLayout';
import { Suspense, lazy } from 'react';
import Loader from './Loader';
const CatalogPage = lazy(() => import('../pages/CatalogPage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
