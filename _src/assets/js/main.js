'use strict';

console.log('>> Ready :)');

const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const tvShows = document.querySelector('.tv-shows');

const url = 'http://api.tvmaze.com/search/shows?q=';
const defaultImg = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';

//Función que llama al listado de series en API

function getList(){
  tvShows.innerHTML = '';
  fetch(`http://api.tvmaze.com/search/shows?q=${input.value}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);


      // Pintar listado de series con títulos e imágenes

      for (const item of data){
        const show = item.show;
        const series = document.createElement('li');
        series.classList.add('results__show');
        const showTitle = document.createElement('h2');
        showTitle.classList.add('results__title');
        const showImg = document.createElement('img');
        showImg.classList.add('results__img');

        if (show.imge === null){
          showImg.src = defaultImg;
        }
      }
    });
}


button.addEventListener('click',getList);