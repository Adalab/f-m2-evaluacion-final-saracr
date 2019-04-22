'use strict';

console.log('>> Ready :)');

const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const tvShows = document.querySelector('.tv-shows');

const url = 'http://api.tvmaze.com/search/shows?q=';
const defaultImg = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';

//Función que llama al listado de series

function showList(){
  const inputValue = input.Value;
  fetch(url + inputValue)
    .then(response => response.json())
    .then(data => {
      getList(data);
    });
  console.log('wtf');
}
// Función que pinte tarjeta de la serie con img y título

function getList(){}


// Botón que muestra listado de series
button.addEventListener('click',showList);