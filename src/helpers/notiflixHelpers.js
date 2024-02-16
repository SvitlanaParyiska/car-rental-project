import Notiflix from 'notiflix';

export const getNotiflixMessage = (type, message) => {
  return Notiflix.Notify[type](message, {
    timeout: 2000,
  });
};
