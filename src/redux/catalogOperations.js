import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCars, getCars } from 'api/catalogApi';

export const getCatalog = createAsyncThunk(
  'catalog/getAdverts',
  async (page, thunkAPI) => {
    try {
      const data = await getCars(page);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getTotalPages = createAsyncThunk(
  'catalog/getPages',
  async (_, thunkAPI) => {
    try {
      const data = await getAllCars();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
