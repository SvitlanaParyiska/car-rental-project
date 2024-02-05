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

export const getCarsByFilter = createAsyncThunk(
  'catalog/getCarByFilter',
  async ({ brand, price, maxMileage, minMileage }, thunkAPI) => {
    try {
      const data = await getAllCars();
      const filterCars = data.filter(
        item =>
          (item.make === brand || !brand) &&
          (Number(item.rentalPrice.slice(1)) <= Number(price) || !price) &&
          (item.mileage <= Number(maxMileage) || !maxMileage) &&
          (item.mileage >= Number(minMileage) || !minMileage)
      );
      return filterCars;
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
      return Math.ceil(data.length / 12);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
