mapboxgl.accessToken = 'pk.eyJ1IjoiaGFkM3IiLCJhIjoiY2psM255cTNnMDl4YTNwcng3eXc5MjBjbiJ9.yW4udE8WipCYR-d5MxZBJg';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11', 
  center: [17.282985, 51.132733], 
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

