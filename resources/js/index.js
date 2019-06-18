$(document).ready(function() {

  // Sticky naw
  $('.js--section-features').waypoint(function(direction) {
    if (direction == 'down') {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px'
  });

  // Scroll on buttons
  $('.js--scroll-to-map').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-map').offset().top}, 1000);
  });

  $('.js--scroll-to-start').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
  });

  // Nav scroll
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  // Animations on scroll
  $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn')
  }, {
    offset: '50%',
  });

  $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated fadeInUp')
  }, {
    offset: '50%',
  });

  $('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated fadeIn')
  }, {
    offset: '50%',
  });

  // Mobile nav
  $('.js--nav-icon').click(() => {
        
    const  nav = $('.js--main-nav'); 
    const icon = $('.ion-icon'); 

    nav.slideToggle(300); 

    if(icon.attr('name') === 'menu' ){ 
       icon.removeAttr('name');
       icon.attr('name','close');
    } else {
        icon.removeAttr('name','close');
        icon.attr('name','menu');
    }
  });
});

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
          "icon-size": .4
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




