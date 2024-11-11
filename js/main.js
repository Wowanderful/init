import {createSimilarObjects} from './moc.js';
import {makeInactive, makeActive, setuserFormSubmit, setCheckInOut} from './form.js';
// import {createMainMarker, createMarker} from './map.js';
import {successMessage, errorMessage} from './modals.js';
import {getData, createMainMarker, createMarker} from './api.js';



makeInactive();



setCheckInOut();

setuserFormSubmit(successMessage, errorMessage);

console.log(createSimilarObjects)

const address = document.getElementById('address');

const map = L.map('map-canvas')
  .on('load', () => {
    makeActive();
    address.value = 'LatLng(35.67749, 139.76854)';
    getData();
  })
  .setView({
    lat: 35.67749,
    lng: 139.76854,
  }, 13);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
  const markerGroup = L.layerGroup().addTo(map)
createMainMarker();

export {map, markerGroup}

