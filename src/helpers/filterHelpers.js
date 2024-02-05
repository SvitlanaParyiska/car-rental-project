export const getOptions = (array, string) => {
  const newArr = array.map(item => {
    return { value: item, label: item };
  });
  return [{ value: '', label: string }, ...newArr];
};
