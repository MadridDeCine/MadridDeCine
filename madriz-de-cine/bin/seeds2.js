const mongoose = require('mongoose');
const Film = require('../models/film.model');

const dbName = 'madriz-de-cine';
mongoose.connect(`mongodb://localhost/${dbName}`)



const films = [
  {
    title: "Abre los ojos",
    imageFilm: "https://res.cloudinary.com/dw1febtea/image/upload/v1581606110/sample.jpg",
    year: 1997,
    director: "Alejandro Amenabar",
    actors: ["Eduardo Noriega", "Penelope Cruz", "Fele Martinez", "Najwa Nimri"],
    argument: "Un hombre desfigurado se encuentra entre un sueño y la realidad cuando recuerda los eventos de su accidente.",
    place: "Gran Via",
    coords: {
      lat: 40.420436,
      lng: -3.704041
    } 
  },
  {
    title: "El ultimátum de Bourne",
    image: "https://res.cloudinary.com/dw1febtea/image/upload/v1581606110/sample.jpg",
    year: 2007,
    director: "Paul Greengrass",
    actors: ["Matt Damon"],
    argument: "Un hombre desfigurado se encuentra entre un sueño y la realidad cuando recuerda los eventos de su accidente.",
    place: "Atocha",
    coords: {
      lat: 40.406898,
      lng: -3.690900
    }
  },
  {
    title: "El día de la bestia",
    image: "https://res.cloudinary.com/dw1febtea/image/upload/v1581606110/sample.jpg",
    year: 1995,
    director: "Álex de la Iglesia",
    actors: ["Álex Angulo", "Santiago Segura", "Armando de Razza"],
    argument: "Un hombre desfigurado se encuentra entre un sueño y la realidad cuando recuerda los eventos de su accidente.",
    place: "Plaza del Callao",
    coords: {
      lat: 40.420436,
      lng: -3.704041
    }
  
  
  }
]


Film.create(films, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${films.length} films`)
  mongoose.connection.close()
})