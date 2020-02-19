// Coordenadas iniciales para pintar el mapa

let initialCoords = {
    lat: 40.4165000,
    lng: -3.7025600
},myMap

// Funcion que incia el mapa

function initMap() {
    let mapOptions = { center: initialCoords, zoom: 15 }
    myMap = new google.maps.Map(document.querySelector('#myMap'), mapOptions)
    getFilms()
}


function getFilms() {

    axios.get("/film/api")
        .then(response => {
            const allFilms = response.data
            console.log('el array de peliculas es:', allFilms)
            placeFilmsInMap(allFilms)
        })
        .catch(error => console.log(error))
}


function placeFilmsInMap(films) {
    console.log()

    films.forEach(oneFilm => {
        const center = { lat: oneFilm.coords.lat, lng: oneFilm.coords.lng }
        new google.maps.Marker({ position: center, map: myMap, title: oneFilm.title })
    })
}

