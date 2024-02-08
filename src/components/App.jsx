import { Routes, Route } from 'react-router-dom';
import '../index.css';
import SharedLayout from './SharedLayout';
import { lazy } from 'react';
const HomePage = lazy(() => import('../pages/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/index'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage/index'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
