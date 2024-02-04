import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import CatalogPage from 'pages/CatalogPage';
import FavoritesPage from 'pages/FavoritesPage';
import '../index.css';

import SharedLayout from './SharedLayout';
import { Suspense } from 'react';
import Loader from './Loader';

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
