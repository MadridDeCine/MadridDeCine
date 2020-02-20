// let initialCoords = {
//     lat: 40.3977381,
//     lng: -3.790471916
//   },
let initialCoords,myMap

    // console.log("Tengo que funcionar",setInitialCoords(document.getElementById('myId').innerText))
    setInitialCoords(document.getElementById('myId').innerText)
    .then(value=>initMap(value))

function initMap(cord) {

    const mapOptions = {center: cord,zoom: 15, styles: mapStyles.grey}
    console.log(mapOptions)
    myMap = new google.maps.Map(document.querySelector('#myMap'), mapOptions)
    // console.log(document.getElementById('myId').innerText)
    getFilm(document.getElementById('myId').innerText)
}

function setInitialCoords(id){
    
     return axios.get(`/film/api/${id}`)
        .then(response => {
            const film = response.data
            return myCoords={lat: film.coords.lat,lng: film.coords.lng}
        })
        .catch(error => console.log(error))

}

function getFilm(id){
    axios.get(`/film/api/${id}`)
        .then(response => {
            const film = response.data
            placeFilm(film)
        })
        .catch(error => console.log(error))
}

function placeFilm(film){
    const center = {lat:film.coords.lat,lng:film.coords.lng}
    new google.maps.Marker({ position: center, map: myMap, title: film.title })
}
