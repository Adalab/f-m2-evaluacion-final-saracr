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
  console.log('data');
}
// Función que pinte tarjeta de la serie con img y título

function getList(){}


// Botón que muestra listado de series
button.addEventListener('click',showList);


// Pintar listado de series con títulos e imágenes

//       for (let i=0; i<data.length;i++){
//         console.log(data[i].show.name);

//         const series = document.createElement('li');
//         series.classList.add('tv__show-list');
//         const showTitle = document.createElement('h2');
//         showTitle.classList.add('title__show');
//         const showImg = document.createElement('img');
//         showImg.classList.add('img__show');

//         //Crear contenidos

//         const nameShow = document.createTextNode(data[i].show.name);
//         const showTitleSeries = (nameShow);

//         // mostrar el contenido

//         showTitle.appendChild(showTitleSeries);
//         const showImage = data[i].show.image;
//         const defaultImg = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
//         if (showImage === null){
//           showImg.src = defaultImg;
//         }
//       }
//     });