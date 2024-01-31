import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCarById, getCars } from 'api/catalogApi';

export const getCatalog = createAsyncThunk(
  'catalog/getCatalog',
  async (_, thunkAPI) => {
    try {
      const data = await getCars();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCarId = createAsyncThunk(
  'catalog/getCarById',
  async (carId, thunkAPI) => {
    try {
      const data = await getCarById(carId);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
