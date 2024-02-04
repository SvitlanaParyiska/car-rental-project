import { createSlice } from '@reduxjs/toolkit';
import { getCarsByFilter, getCatalog } from './catalogOperations';


const catalogInitialState = {
  cars: [],
  carsFavorites: [],
  listFavorites: [],
  filterCars: [],
  isLoading: false,
  error: null,
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
      const index = state.listFavorites.findIndex(item => item === payload.id);
      if (index !== -1) {
        state.carsFavorites.splice(index, 1);
        state.listFavorites.splice(index, 1);
      } else {
        state.carsFavorites.push({ ...payload, isFavorite: true });
        state.listFavorites.push(payload.id);
      }
    },
    clearFiltersCars(state, _) {
      state.filterCars = [];
    },
    clearCars(state, _) {
      state.cars = [];
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
      .addCase(getCarsByFilter.pending, handlePending)
      .addCase(getCarsByFilter.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.filterCars = payload;
      })
      .addCase(getCarsByFilter.rejected, handleRejected);
  },
});

export const { handleFavorites, clearFiltersCars, clearCars } =
  catalogSlice.actions;

export const catalogReducer = catalogSlice.reducer;
