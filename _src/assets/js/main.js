'use strict';

console.log('>> Ready :)');


const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const tvShows = document.querySelector('.tv-shows');

//Función que llama al listado de series

function showList(){
    fetch('http://api.tvmaze.com/search/shows?q=:query')
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data.result)
            for (const result of data.results){
                const shows = result.shows;
                tvShows.innerHTML += `<li> ${image} <br> ${name}`
            }

        })

        
}







function search() {
    fetch(`https://swapi.co/api/people/?search=${input.value}`)
       .then(function(response) {
           return response.json();
       })
       .then(function(data) {
           console.log(data.results)
           for (const result of data.results) {
           const name = result.name;
           const gender = result.gender;
           fetch(result.homeworld)
           .then(response => response.json())
           .then(data => {
                personajillos.innerHTML += `<li>Nombre: ${name} <br> Género: ${gender} <br> Planeta de origen: ${data.name}</li>`
           });
       }})
    
    }
    
    button.addEventListener('click', search);





// Botón que muestra listado de series 
button.addEventListener('click' showList);