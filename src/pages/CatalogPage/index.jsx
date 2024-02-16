import CatalogList from 'components/CatalogList';
import FilterCars from 'components/FilterCars';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCatalog, getTotalPages } from '../../redux/catalogOperations';
import { ButtonLoadMore } from './CatalogPage.styled';
import { useSelector } from 'react-redux';
import {
  selectCars,
  selectFilterCars,
  selectTotalPages,
} from '../../redux/catalogSelectors';
import { clearCars, clearFiltersCars } from '../../redux/catalogSlice';
import ScrollUp from 'components/ScrollUp';


function CatalogPage() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const arrayToRender = useSelector(selectCars);
  const arrayToRenderByFilter = useSelector(selectFilterCars);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    if (!arrayToRenderByFilter.length > 0) {
      dispatch(getCatalog(page));
    }
  }, [arrayToRenderByFilter.length, dispatch, page]);

  useEffect(() => {
    if (page > totalPages) {
      dispatch(getTotalPages());
    }
  }, [dispatch, page, totalPages]);

  useEffect(() => {
    return () => {
      dispatch(clearFiltersCars());
      dispatch(clearCars());
    };
  }, [dispatch]);

  return (
    <section>
      <div className="container">
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
