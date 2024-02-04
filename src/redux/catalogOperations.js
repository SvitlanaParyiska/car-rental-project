import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCars, getCars } from 'api/catalogApi';
import Notiflix from 'notiflix';

export const getCatalog = createAsyncThunk(
  'catalog/getCatalog',
  async (page, thunkAPI) => {
    try {
      const data = await getCars(page);
      if (!data.length) {
        Notiflix.Notify.info("Sorry, that's all cars for today...", {
          timeout: 2000,
        });
      }
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCarsByFilter = createAsyncThunk(
  'catalog/getCarById',
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
