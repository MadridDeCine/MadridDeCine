// let initialCoords = {
//     lat: 40.4165000,
//     lng: -3.7025600
//   },
//   myMap

// function initMap() {
//   // Opciones de mapa
//   let mapOptions = {
//     center: initialCoords,
//     zoom: 5
//   }
//   myMap = new google.maps.Map(document.querySelector('#myMap'), mapOptions)
//   getRestaurants()
// }



function initMap() {
    // Opciones de mapa
    const mapOptions = {
        center: directions.ironhackMadrid.coords,
        zoom: 15
    }

    // Instancia de mapa
    const myMap = new google.maps.Map(document.querySelector('#myMap'), mapOptions)

    // Opciones de marcador
    // const markerOptions = {
    //     position: directions.ironhackBCN.coords,
    //     map: myMap,
    //     title: directions.ironhackBCN.title
    // }   

    // // Instancia de marcador
    // new google.maps.Marker(markerOptions)
}
