console.log('%c HI', 'color: firebrick')
function fetchDogs() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => renderDogs(json))
  }



