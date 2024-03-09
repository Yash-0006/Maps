mapboxgl.accessToken = 'pk.eyJ1IjoieWFzd2FudGgyNTA1IiwiYSI6ImNsdGZlMGJvNDBvdGEyam0yZTZjODAxNTgifQ.Zw_ARH9rdGic5XFOLjkpeQ';

navigator.geolocation.getCurrentPosition(successlocation,errorlocation,{
    enableHighAccuracy:true
})

function successlocation(position){
    setupMap([position.coords.longitude,position.coords.latitude])
}

function errorlocation(){
    setupMap([-2.24, 53.48])
}

function setupMap(centr){
var map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center:centr,
	zoom: 15, // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());
// map.scrollZoom.disable();

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
);

}



