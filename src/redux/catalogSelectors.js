import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars;
export const selectIsLoading = state => state.isLoading;
export const selectError = state => state.error;
export const selectPage = state => state.page;
export const selectFilterCars = state => state.filterCars;
export const selectListFavorites = state => state.listFavorites;
export const selectCarsFavorites = state => state.carsFavorites;

export const selectCarsWithFlag = createSelector(
  [selectCars, selectListFavorites],
  (cars, listFavorites) => {
    const result = cars.map(car => {
      if (listFavorites.includes(car.id)) {
        return { ...car, isFavorite: true };
      } else {
        return { ...car, isFavorite: false };
      }
    });
    return result;
  }
);

export const selectCarsWithFlagByFilter = createSelector(
  [selectFilterCars, selectListFavorites],
  (cars, listFavorites) => {
    const result = cars.map(car => {
      if (listFavorites.includes(car.id)) {
        return { ...car, isFavorite: true };
      } else {
        return { ...car, isFavorite: false };
      }
    });
    return result;
  }
);
