import CatalogList from 'components/CatalogList';
import FilterCars from 'components/FilterCars';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCatalog } from '../../redux/catalogOperations';
import { ButtonLoadMore } from './CatalogPage.styled';
import { useSelector } from 'react-redux';
import {
  selectCarsWithFlag,
  selectCarsWithFlagByFilter,
  selectIsLoading,
} from '../../redux/catalogSelectors';
import { clearCars, clearFiltersCars } from '../../redux/catalogSlice';
import ScrollUp from 'components/ScrollUp';
import Loader from 'components/Loader';

function CatalogPage() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const arrayToRender = useSelector(selectCarsWithFlag);
  const arrayToRenderByFilter = useSelector(selectCarsWithFlagByFilter);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    if (!arrayToRenderByFilter.length > 0) {
      dispatch(getCatalog(page));
    }
  }, [arrayToRenderByFilter.length, dispatch, page]);

  useEffect(() => {
    return () => {
      dispatch(clearFiltersCars());
      dispatch(clearCars());
    };
  }, [dispatch]);

  return (
    <section>
      <div className="container">
        {loading && <Loader />}
        <h1 className="visually-hidden">Catalog</h1>
        <FilterCars />
        {arrayToRenderByFilter.length > 0 ? (
          <>
            <CatalogList arrayToRender={arrayToRenderByFilter} />
            <ScrollUp />
          </>
        ) : (
          <>
            <CatalogList arrayToRender={arrayToRender} />

            {(arrayToRender.length > 0 || arrayToRenderByFilter.length > 0) && (
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