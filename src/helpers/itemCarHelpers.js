const premiumCarsArr = [
  'Buick',
  'Volvo',
  'Subaru',
  'Bentley',
  'MINI',
  'Lincoln',
  'Nissan',
  'Mitsubishi',
];

export const getAddressCity = string => {
  const array = string.split(',');
  const indexCity = array.length - 2;
  const city = array[indexCity];
  return city;
};

export const getAddressCountry = string => {
  const array = string.split(',');
  const indexCountry = array.length - 1;
  const city = array[indexCountry];
  return city;
};

export const getRentalConditions = string => {
  const array = string.split('\n');
  const ageArr = array[0].split(' ');
  return [ageArr[2], array[1], array[2]];
};

export const getPremiumCar = string => {
  if (premiumCarsArr.includes(string)) {
    return true;
  }
  return false;
};
