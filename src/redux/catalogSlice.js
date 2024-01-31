import { createSlice } from '@reduxjs/toolkit';
import { getCarId, getCatalog } from './catalogOperations';

const catalogInitialState = {
  cars: [],
  carId: null,
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
  extraReducers: builder => {
    builder
      .addCase(getCatalog.pending, handlePending)
      .addCase(getCatalog.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.cars = payload;
      })
      .addCase(getCatalog.rejected, handleRejected)
      .addCase(getCarId.pending, handlePending)
      .addCase(getCarId.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.carId = payload;
      })
      .addCase(getCarId.rejected, handleRejected);
  },
});

export const catalogReducer = catalogSlice.reducer;
