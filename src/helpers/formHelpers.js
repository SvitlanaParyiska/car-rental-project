export const getPrice = string => {
  const arr = string.slice(string.length - 1).split(' ');
  return arr[1];
};

export const getMileage = string => {
  const arr = string.splite(' ');
  return arr[1].replace(/[\s,]/g, '');
};
