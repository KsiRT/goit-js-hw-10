function fetchBreeds(url) {
  return fetch(url)
    .then(r => r.json())
    .then(arrayOfObjects => {
      // console.dir(arrayOfObjects);
      return arrayOfObjects;
    })
    .catch(er => console.log(er));
}

export default {
  fetchBreeds,
};
