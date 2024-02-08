import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars;
export const selectIsLoading = state => state.isLoading;
export const selectError = state => state.error;
export const selectPage = state => state.page;
export const selectFilterCars = state => state.filterCars;
export const selectCarsFavorites = state => state.carsFavorites;
export const selectTotalPages = state => state.totalPages;

export const selectCarsWithFlag = createSelector(
  [selectCars, selectCarsFavorites],
  (cars, carsFavorites) => {
    const result = cars.map(car => {
      if (carsFavorites.find(item => item.id === car.id)) {
        return { ...car, isFavorite: true };
      } else {
        return { ...car, isFavorite: false };
      }
    });
    return result;
  }
);

export const selectCarsWithFlagByFilter = createSelector(
  [selectFilterCars, selectCarsFavorites],
  (cars, carsFavorites) => {
    const result = cars.map(car => {
      if (carsFavorites.find(item => item.id === car.id)) {
        return { ...car, isFavorite: true };
      } else {
        return { ...car, isFavorite: false };
      }
    });
    return result;
  }
);
