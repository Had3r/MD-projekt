mapboxgl.accessToken = 'pk.eyJ1IjoiaGFkM3IiLCJhIjoiY2psM255cTNnMDl4YTNwcng3eXc5MjBjbiJ9.yW4udE8WipCYR-d5MxZBJg';

let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11', 
  center: [17.280855, 51.132292], 
  zoom: 10 
});



map.on('load', function() {
  map.loadImage('https://img.icons8.com/color/96/000000/marker.png', function(error, image) {
    if (error) throw error;
    map.addImage('cat', image);
    map.addLayer({
      "id": "points",
      "type": "symbol",
        "source": {
        "type": "geojson",
          "data": {
          "type": "FeatureCollection",
            "features": [{
            "type": "Feature",
              "geometry": {
              "type": "Point",
              "coordinates": [16.994438, 51.139770]
              }
            }]
          }
        },
        "layout": {
          "icon-image": "cat",
          "icon-size": .6
        }
    });
  });
});

let mq = window.matchMedia( "(max-width: 990px)" );

if (mq.matches){
   map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', 
    center: [17.153625, 51.135909], 
    zoom: 10 
  });
};

mq = window.matchMedia( "(max-width: 570px)" );

if (mq.matches){
   map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', 
    center: [17.091808, 51.131359], 
    zoom: 10 
  });
};


