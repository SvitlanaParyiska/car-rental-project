import CatalogItem from 'components/CatalogItem';
import React from 'react';
import { CarList } from './CatalogList.styled';

function CatalogList({ arrayToRender }) {
  return (
    <div>
      <CarList>
        {arrayToRender.length > 0 &&
          arrayToRender.map((car, index) => (
            <CatalogItem key={car.id} car={car} index={index} />
          ))}
      </CarList>
    </div>
  );
}

export default CatalogList;
