import { Notify } from 'notiflix/build/notiflix-notify-aio';

const url = 'https://restcountries.com/v3.1/name/';
const filter = 'fields=name,capital,population,flags,languages';

export function fetchCountries(name) {
  return fetch(`${url}${name}?${filter}`).then(resp => {
    if (!resp.ok) {
      throw Notify.failure('Oops, there is no country with that name');
    }
    return resp.json();
  });
}
