'use strict';

console.log('>> Ready :)');


const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const tvShows = document.querySelector('.tv-shows');

//Función que llama al listado de series

function showList(){
  fetch('http://api.tvmaze.com/search/shows?q=')
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data.result);
      for (const result of data.results){
        const shows = result.shows;
        tvShows.innerHTML += `<li> ${image} <br> ${name}`;
      }

    });


}



// Botón que muestra listado de series
button.addEventListener('click',showList);