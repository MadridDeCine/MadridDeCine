// let initialCoords = {
//     lat: 40.3977381,
//     lng: -3.790471916
//   },
let initialCoords,myMap

    // console.log("Tengo que funcionar",setInitialCoords(document.getElementById('myId').innerText))
    setInitialCoords(document.getElementById('myId').innerText)
    .then(value=>initMap(value))

function initMap(cord) {

    const mapOptions = {center: cord,zoom: 13, styles: mapStyles.grey}
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
            placeMarkers(film)
        })
        .catch(error => console.log(error))
}

function placeMarkers(film){
    let iconBase = {
        url: 'https://res.cloudinary.com/dw1febtea/image/upload/v1582193118/claqueta1_qkhc1p.png',
        scaledSize: new google.maps.Size(50, 60)
    }
    const center = {lat:film.coords.lat,lng:film.coords.lng}
    let marker = new google.maps.Marker({ position: center, map: myMap, icon: iconBase })
    let infowindow = new google.maps.InfoWindow({ content: film.title, closeOnMapClick: true, shadow: true })
    marker.addListener("mouseover", () => {
        infowindow.open(myMap, marker)
        activeInfoWindow = infowindow
    })
    marker.addListener("mouseout", () => {
        activeInfoWindow.close()
    })
    film.morePlaces.forEach(elm => {
        let centerMorePlaces = {lat:elm.lat,lng:elm.lng}
        let marker = new google.maps.Marker({ position: centerMorePlaces, map: myMap, icon: iconBase })
        let infowindow = new google.maps.InfoWindow({ content: elm.name, closeOnMapClick: true, shadow: true })
        
        marker.addListener("mouseover", () => {
            infowindow.open(myMap, marker)
            activeInfoWindow = infowindow
        })
        marker.addListener("mouseout", () => {
            activeInfoWindow.close()
        })
    });

    
}
