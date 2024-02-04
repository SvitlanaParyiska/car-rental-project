import React from 'react';
import { useSelector } from 'react-redux';
import { selectCarsFavorites } from '../../redux/catalogSelectors';
import CatalogList from 'components/CatalogList';
import ScrollUp from 'components/ScrollUp';

function FavoritesPage() {
  const favCars = useSelector(selectCarsFavorites);

  return (
    <section>
      <div className="container">
        {favCars.length > 0 ? (
          <>
            <h1 style={{ marginBottom: 30, textAlign: 'center' }}>
              Your favorites cars
            </h1>
            <CatalogList arrayToRender={favCars} />
            <ScrollUp />
          </>
        ) : (
          <p>Your list of favorites is empty...</p>
        )}
      </div>
    </section>
  );
}

export default FavoritesPage;
