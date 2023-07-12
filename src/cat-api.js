import { selectorOfBreed, catInfoElement, errEl } from '.';

function fetchBreeds(url) {
  return fetch(url)
    .then(r => r.json())
    .then(arrayOfObjects => {
      console.dir(arrayOfObjects);
      return arrayOfObjects;
    })
    .catch(er => {
      catInfoElement.innerHTML = '';
      errEl.style.display = 'block';
      console.log(er);
    });
}

function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
  )
    .then(r => {
      return r.json();
    })
    .then(catImg => {
      return catImg[0].url;
    })
    .catch(er => {
      catInfoElement.innerHTML = '';

      console.log(er);
    });
}

export default {
  fetchBreeds,
  fetchCatByBreed,
};
