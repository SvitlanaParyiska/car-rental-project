import { createSlice } from '@reduxjs/toolkit';
import { getCatalog, getTotalPages } from './catalogOperations';

const catalogInitialState = {
  allCars: [],
  cars: [],
  carsFavorites: [],
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

export const { deleteFavorite, addFavorite, clearCars } = catalogSlice.actions;

export const catalogReducer = catalogSlice.reducer;
