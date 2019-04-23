'use strict';

const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const tvShows = document.querySelector('.tv__shows');

const imgDefault = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';


//Función que llama al listado de series en API

function getList(){
  tvShows.innerHTML = '';
  fetch(`http://api.tvmaze.com/search/shows?q=${input.value}`)
    .then(response => response.json())
    .then(data => {
      for (const result of data) {
        if (result.show.image === null) {
          tvShows.innerHTML += `<h2 class="show__title">${result.show.name}</h2><li class="tv__shows-list"><br><img class="img__show" src="${imgDefault}"<br></li>`;
        } else {
          tvShows.innerHTML += `<h2 class="show__title">${result.show.name}</h2><li class="tv__shows-list"><br><img class="img__show" src="${result.show.image.medium}"<br></li>`;
        }
      }
    });
}

button.addEventListener('click',getList);