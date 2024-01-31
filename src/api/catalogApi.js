import axios from 'axios';

axios.defaults.baseURL = 'https://65290e8d55b137ddc83e22f0.mockapi.io/';

export const getCars = async () => {
  const { data } = await axios.get('adverts');
  return data;
};

export const getCarById = async carId => {
  const { data } = await axios.get(`adverts/${carId}`);
  return data;
};
