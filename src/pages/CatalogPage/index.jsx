import CatalogList from 'components/CatalogList';
import FilterCars from 'components/FilterCars';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCatalog, getTotalPages } from '../../redux/catalogOperations';
import { ButtonLoadMore } from './CatalogPage.styled';
import { useSelector } from 'react-redux';
import {
  selectAllCars,
  selectCars,
  selectTotalPages,
} from '../../redux/catalogSelectors';
import { clearCars } from '../../redux/catalogSlice';
import ScrollUp from 'components/ScrollUp';
import { getNotiflixMessage } from 'helpers/notiflixHelpers';

function CatalogPage() {
  const [page, setPage] = useState(1);
  const [filterDone, setFilterDone] = useState(false);
  const dispatch = useDispatch();
  const [arrayToRender, setArrayToRender] = useState([]);
  const allCars = useSelector(selectAllCars);
  const cars = useSelector(selectCars);
  const totalPages = useSelector(selectTotalPages);

  function getCarsByFilter(brand, price, maxMileage, minMileage) {
    const filterResult = allCars.filter(
      item =>
        (item.make === brand || !brand) &&
        (Number(item.rentalPrice.slice(1)) <= Number(price) || !price) &&
        (item.mileage <= Number(maxMileage) || !maxMileage) &&
        (item.mileage >= Number(minMileage) || !minMileage)
    );
    if (!filterResult.length > 0) {
      getNotiflixMessage(
        'info',
        'Sorry, nothing ... Try change filter params!'
      );
    }
    setArrayToRender(filterResult);
    setFilterDone(true);
  }

  useEffect(() => {
    dispatch(getCatalog(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (page > totalPages) {
      dispatch(getTotalPages());
    }
  }, [dispatch, page, totalPages]);

  useEffect(() => {
    return () => {
      dispatch(clearCars());
    };
  }, [dispatch]);

  return (
    <section>
      <div className="container">
        <h1 className="visually-hidden">Catalog</h1>
        <FilterCars getCarsByFilter={getCarsByFilter} />
        {arrayToRender.length > 0 || filterDone ? (
          <>
            <CatalogList arrayToRender={arrayToRender} />
            {!arrayToRender.length > 0 && (
              <p style={{ textAlign: 'center' }}>
                Sorry, we didn't find nothing. Try change parameters of
                filter...
              </p>
            )}
            <ScrollUp />
          </>
        ) : (
          <>
            <CatalogList arrayToRender={cars} />
            {page < totalPages && (
              <ButtonLoadMore type="button" onClick={() => setPage(page + 1)}>
                Load More
              </ButtonLoadMore>
            )}
            <ScrollUp />
          </>
        )}
      </div>
    </section>
  );
}

export default CatalogPage;
