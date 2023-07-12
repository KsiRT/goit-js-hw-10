import axios from 'axios';
import CatAPI from './cat-api';

axios.defaults.headers.common['x-api-key'] =
  'live_wmRji3fnJQHS4qHXv8dtXH1MgZnrctjtZdiNMlHltH53uuTHiUJOmM2azdaD3z8E';

const selectorOfBreed = document.querySelector('.breed-select');

const url = 'https://api.thecatapi.com/v1/breeds';

function renderOptions() {
  CatAPI.fetchBreeds(url).then(data => {
    const res = data
      .map(cat => {
        return `<option value="${cat.id}"> ${cat.name} </option>`;
      })
      .join('');
    selectorOfBreed.insertAdjacentHTML('afterbegin', res);
  });
}
renderOptions();

/* <option value="1"> Miner </option>; */
