import axios from 'axios';
import CatAPI from './cat-api';

axios.defaults.headers.common['x-api-key'] =
  'live_wmRji3fnJQHS4qHXv8dtXH1MgZnrctjtZdiNMlHltH53uuTHiUJOmM2azdaD3z8E';

const selectorOfBreed = document.querySelector('.breed-select');

const url = 'https://api.thecatapi.com/v1/breeds';

// const create = CatAPI.fetchBreeds(url);

function createOptions() {
  const structuredData = renderOptions(CatAPI.fetchBreeds(url));

  selectorOfBreed.insertAdjacentHTML('afterbegin', structuredData);
}
createOptions();
function renderOptions(arr) {
  try {
    const res = arr.map(
      (cat => {
        console.log(cat);
        return `<option value="${cat.id}"> ${cat.name} </option>`;
      }).join('')
    );
    console.log(res);
  } catch (er) {
    console.log(er);
  }
}

/* <option value="1"> Miner </option>; */
