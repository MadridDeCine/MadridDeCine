// Coordenadas iniciales para pintar el mapa

let initialCoords = {
    lat: 40.4165000,
    lng: -3.7025600
},myMap

// Funcion que incia el mapa

function initMap() {
    let mapOptions = { center: initialCoords, zoom: 14 }
    myMap = new google.maps.Map(document.querySelector('#myMap'), mapOptions)
    getFilms(myMap)
}


function getFilms(myMap) {

    axios.get("/film/api")
        .then(response => {
            const allFilms = response.data
            console.log('el array de peliculas es:', allFilms)
            placeFilmsInMap(allFilms, myMap)
        })
        .catch(error => console.log(error))
}


// function placeFilmsInMap(films) {
//     films.forEach(oneFilm => {
//         const center = { lat: oneFilm.coords.lat, lng: oneFilm.coords.lng }
//         new google.maps.Marker({ position: center, map: myMap, title: oneFilm.title })
//     })
// }

// Fuente imagentes
let iconBase = 'https://maps.google.com/mapfiles/kml/shapes/'

function placeFilmsInMap(films, myMap) {
    var activeInfoWindow
        films.forEach(oneFilm => {
            console.log(oneFilm.title)
            const center = { lat: oneFilm.coords.lat, lng: oneFilm.coords.lng }
            let marker = new google.maps.Marker({ position: center, map: myMap, icon: iconBase + 'movies.png' })
            let infowindow = new google.maps.InfoWindow({content: oneFilm.title, closeOnMapClick:true, shadow:true})
            marker.addListener('click', () => {
                if (activeInfoWindow) {
                  activeInfoWindow.close();
                }
                infowindow.open(myMap, marker);
                activeInfoWindow = infowindow;
              })

        })
        //console.log(title)
    }

 

