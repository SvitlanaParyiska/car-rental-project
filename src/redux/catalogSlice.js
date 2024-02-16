import { createSlice } from '@reduxjs/toolkit';
import { getCatalog, getTotalPages } from './catalogOperations';
import { getNotiflixMessage } from 'helpers/notiflixHelpers';

const catalogInitialState = {
  allCars: [],
  cars: [],
  carsFavorites: [],
  filterCars: [],
  isLoading: false,
  error: null,
  totalPages: 0,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: catalogInitialState,
  reducers: {
    deleteFavorite(state, { payload }) {
      const index = state.carsFavorites.findIndex(item => item.id === payload);
      state.carsFavorites.splice(index, 1);
    },
    addFavorite(state, { payload }) {
      state.carsFavorites.push({ ...payload });
    },

    clearFiltersCars(state, _) {
      state.filterCars = [];
    },
    clearCars(state, _) {
      state.cars = [];
    },
    getCarsByFilter(state, { payload }) {
      const carsByFilter = state.allCars.filter(
        item =>
          (item.make === payload.brand || !payload.brand) &&
          (Number(item.rentalPrice.slice(1)) <= Number(payload.price) ||
            !payload.price) &&
          (item.mileage <= Number(payload.maxMileage) || !payload.maxMileage) &&
          (item.mileage >= Number(payload.minMileage) || !payload.minMileage)
      );
      if (carsByFilter.length > 0) {
        state.filterCars = carsByFilter;
      } else {
        state.filterCars = [];
        // state.cars = [];
        getNotiflixMessage(
          'info',
          'Sorry, nothing ... Try change filter params!'
        );
      }
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getCatalog.pending, handlePending)
      .addCase(getCatalog.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.cars.push(...payload);
      })
      .addCase(getCatalog.rejected, handleRejected)
      .addCase(getTotalPages.pending, handlePending)
      .addCase(getTotalPages.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.totalPages = Math.ceil(payload.length / 12);
        state.allCars = payload;
      })
      .addCase(getTotalPages.rejected, handleRejected);
  },
});

export const {
  deleteFavorite,
  addFavorite,
  clearFiltersCars,
  clearCars,
  getCarsByFilter,
} = catalogSlice.actions;

export const catalogReducer = catalogSlice.reducer;
