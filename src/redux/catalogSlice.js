import { createSlice } from '@reduxjs/toolkit';
import { getCatalog, getTotalPages } from './catalogOperations';
import Notiflix from 'notiflix';

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
    handleFavorites(state, { payload }) {
      const index = state.carsFavorites.findIndex(
        item => item.id === payload.id
      );
      if (index !== -1) {
        state.carsFavorites.splice(index, 1);
      } else {
        state.carsFavorites.push({ ...payload, isFavorite: true });
      }
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
        state.cars = [];
        Notiflix.Notify.info('Sorry, nothing ... Try change filter params!', {
          timeout: 2000,
        });
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
    // .addCase(getCarsByFilter.pending, handlePending)
    // .addCase(getCarsByFilter.fulfilled, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   if (payload.length > 0) {
    //     state.filterCars = payload;
    //   } else {
    //     state.filterCars = [];
    //     state.cars = [];
    //     Notiflix.Notify.info('Sorry, nothing ... Try change filter params!', {
    //       timeout: 2000,
    //     });
    //   }
    // })
    // .addCase(getCarsByFilter.rejected, handleRejected);
  },
});

export const { handleFavorites, clearFiltersCars, clearCars, getCarsByFilter } =
  catalogSlice.actions;

export const catalogReducer = catalogSlice.reducer;
