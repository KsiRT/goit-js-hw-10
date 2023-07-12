import axios from 'axios';
import CatAPI from './cat-api';
import SlimSelect from 'slim-select';

let select = null;

axios.defaults.headers.common['x-api-key'] =
  'live_wmRji3fnJQHS4qHXv8dtXH1MgZnrctjtZdiNMlHltH53uuTHiUJOmM2azdaD3z8E';

export const selectorOfBreed = document.querySelector('.breed-select');
export const catInfoElement = document.querySelector('.cat-info');
const url = 'https://api.thecatapi.com/v1/breeds';
const loaderEl = document.querySelector('.loader');
export const errEl = document.querySelector('.error');

loaderEl.style.display = 'none';
errEl.style.display = 'none';

function renderOptions() {
  CatAPI.fetchBreeds(url).then(data => {
    const res = data
      .map(cat => {
        return `<option value="${cat.id}"> ${cat.name} </option>`;
      })
      .join('');
    selectorOfBreed.insertAdjacentHTML('afterbegin', res);
    select = new SlimSelect({
      select: '.breed-select',
      events: {
        afterChange: newVal => {
          loaderEl.style.display = 'block';

          console.log(newVal);
          const id = newVal[0].value;
          console.log(id);
          console.log(this);
          CatAPI.fetchCatByBreed(id).then(data => {
            console.log(data);
            const imgElement = `<img src="${data}" alt="Citty" width = '500'>`;
            catInfoElement.innerHTML = imgElement;
          });

          CatAPI.fetchBreeds(url)
            .then(massivKotov => {
              const cat = massivKotov.find(cat => cat.id === id);
              console.log(cat);
              return `<p>${cat.name}</p> <p>${cat.description}</p> <p>${cat.temperament}</p>`;
            })
            .then(markup => {
              catInfoElement.insertAdjacentHTML('afterbegin', markup);
              loaderEl.style.display = 'none';
            });
        },
      },
    });
  });
}

renderOptions();

function onSelectorChange({ target }) {
  // const id = target.value;
  // console.log(id);
  // CatAPI.fetchCatByBreed(id).then(data => {
  //   console.log(data);
  //   const imgElement = `<img src="${data}" alt="Citty" width = '500'>`;
  //   catInfoElement.innerHTML = imgElement;
  // });
  // CatAPI.fetchBreeds(url)
  //   .then(massivKotov => {
  //     const cat = massivKotov.find(cat => cat.id === id);
  //     console.log(cat);
  //     return `<p>${cat.name}</p> <p>${cat.description}</p> <p>${cat.temperament}</p>`;
  //   })
  //   .then(markup => {
  //     catInfoElement.insertAdjacentHTML('afterbegin', markup);
  //   });
}

// selectorOfBreed.addEventListener('change', onSelectorChange);

/* <option value="1"> Miner </option>; */
