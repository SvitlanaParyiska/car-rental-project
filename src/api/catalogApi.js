import axios from 'axios';

axios.defaults.baseURL = 'https://65290e8d55b137ddc83e22f0.mockapi.io/';

export const getCars = async page => {
  const { data } = await axios.get('adverts', {
    params: { page, limit: 12 },
  });
  return data;
};

export const getAllCars = async carId => {
  const { data } = await axios.get(`adverts`);
  return data;
};
