(function() {
  var $imgs, $next, $prev, duration, index, interval, nowFade, nowImg, slide, slideNum, slideTimer, startSlideTimer;

  $imgs = $('#js-slide').find('img');

  $prev = $('#js-slide-prev');

  $next = $('#js-slide-next');

  duration = 1000;

  interval = 7000;

  slideNum = $imgs.length;

  index = slideNum;

  nowImg = $imgs.first();

  slideTimer = '';

  nowFade = false;

  $imgs.first().show();

  startSlideTimer = function() {
    return slideTimer = window.setInterval(function() {
      return slide(++index);
    }, interval);
  };

  slide = function() {
    var nextImg;
    nowFade = true;
    nextImg = $imgs[index % slideNum];
    $(nowImg).fadeOut(duration);
    return $(nextImg).fadeIn(duration, function() {
      nowImg = this;
      return nowFade = false;
    });
  };

  $prev.click(function(e) {
    if (nowFade) {
      return;
    }
    clearInterval(slideTimer);
    --index;
    slide();
    return startSlideTimer();
  });

  $next.click(function(e) {
    if (nowFade) {
      return;
    }
    clearInterval(slideTimer);
    ++index;
    slide();
    return startSlideTimer();
  });

  window.addEventListener('DOMContentLoaded', startSlideTimer, false);

}).call(this);


/*
 * Lazy Line Painter - Path Object
 * Generated using 'SVG to Lazy Line Converter'
 *
 * http://lazylinepainter.info
 * Copyright 2013, Cam O'Connell
 *
 */

(function() {
  var $btn, $dinner, $feature, $hotel, $memory, $window, dinnerPath, hotelPath, memoryPath, paint;

  memoryPath = {
    memory: {
      strokepath: [
        {
          path: "M107.963,25.787H31.16v-7.111H21.046v7.11h-9.008c-5.216,0-9.64,4.267-9.64,9.64v59.736c0,5.373,4.425,9.639,9.64,9.639   h95.925c5.372,0,9.639-4.266,9.639-9.639V35.427C117.602,30.054,113.335,25.787,107.963,25.787z M60.078,96.269   c-13.748,0-24.968-11.063-24.968-24.81c0-13.75,11.22-24.969,24.968-24.969c13.591,0,24.81,11.22,24.81,24.969   C84.889,85.207,73.669,96.269,60.078,96.269z M110.964,52.336H82.519c-5.372-6.321-13.591-10.431-22.441-10.431   c-9.008,0-17.066,4.108-22.599,10.431L9.034,52.494V37.323c0-2.687,2.212-4.898,4.898-4.898h92.132   c2.687,0,4.898,2.212,4.898,4.898v15.013H110.964z",
          duration: 2000
        }, {
          path: "M78.253,15.199h20.859v8.533H78.253V15.199z",
          duration: 500
        }, {
          path: "M 60,72 m -18,0 a 18,18 0 1,0 36,0 a 18,18 0 1,0 -36,0",
          duration: 500
        }
      ],
      dimensions: {
        width: 120,
        height: 120
      }
    }
  };

  dinnerPath = {
    dinner: {
      strokepath: [
        {
          path: "M97.627,88.282L55.894,49.904c1.074-0.779,2.321-1.21,3.591-1.262c1.674-0.068,3.348-0.656,4.629-1.936l19.217-19.218  c0,0,18.61-17.764,11.958-24.418c-1.715-1.714-4.496-1.712-6.211,0.003L48.783,43.365l-2.815-2.589  c-1.421-1.42-2.37-3.135-2.861-4.942l-1.837-7.985l-0.003-0.002c-0.454-1.984-1.45-3.871-2.995-5.416  c-0.352-0.353-0.724-0.673-1.1-0.971L12.241,0.656c-0.383-0.311-0.948-0.29-1.306,0.067c-0.382,0.383-0.381,0.999,0.001,1.382  l21.545,21.203c0.526,0.526,0.525,1.378,0,1.904c-0.525,0.524-1.377,0.525-1.904,0L8.858,4.184C8.475,3.801,7.855,3.803,7.473,4.186  c-0.381,0.382-0.382,1,0.001,1.383l21.374,21.373c0.526,0.526,0.525,1.378,0,1.904c-0.526,0.526-1.378,0.526-1.904,0L5.57,7.472  C5.187,7.089,4.569,7.09,4.185,7.473C3.803,7.854,3.803,8.472,4.186,8.855l21.028,21.721c0.526,0.526,0.526,1.377,0,1.903  c-0.525,0.525-1.377,0.526-1.904,0L2.108,10.934c-0.383-0.383-1.002-0.381-1.385,0.001c-0.356,0.356-0.377,0.921-0.067,1.305  l20.807,24.928c0.293,0.382,0.617,0.752,0.968,1.104c1.545,1.544,3.431,2.541,5.416,2.994l0.003,0.003l7.983,1.839  c1.81,0.487,3.518,1.445,4.938,2.865l2.589,2.815L5.211,86.935c-2.58,2.579-2.582,6.764,0,9.345c2.581,2.581,6.764,2.579,9.343,0  l35.582-40.126l38.147,41.473c2.58,2.581,6.764,2.581,9.345,0C100.206,95.048,100.207,90.863,97.627,88.282z",
          duration: 2000
        }
      ],
      dimensions: {
        width: 100,
        height: 100
      }
    }
  };

  hotelPath = {
    hotel: {
      strokepath: [
        {
          path: "M72.113,9.891c0.413,0.406,0.665,1.195,0.565,1.764l-0.673,3.86c-0.101,0.569,0.229,0.806,0.736,0.529l3.341-1.831  c0.507-0.279,1.327-0.279,1.834,0l3.34,1.831c0.508,0.276,0.838,0.04,0.737-0.529l-0.672-3.86c-0.101-0.569,0.151-1.358,0.565-1.764  l2.738-2.7c0.412-0.406,0.28-0.8-0.291-0.881l-3.74-0.529c-0.57-0.08-1.236-0.569-1.482-1.093l-1.664-3.521  c-0.247-0.523-0.649-0.523-0.896,0l-1.664,3.521c-0.246,0.523-0.912,1.013-1.482,1.093l-3.74,0.529  c-0.57,0.082-0.704,0.475-0.291,0.881L72.113,9.891z",
          duration: 300
        }, {
          path: "M54.112,9.891c0.412,0.406,0.666,1.195,0.564,1.764l-0.672,3.86c-0.102,0.569,0.23,0.806,0.737,0.529l3.341-1.831  c0.506-0.279,1.326-0.279,1.833,0l3.341,1.831c0.506,0.276,0.838,0.04,0.736-0.529l-0.672-3.86  c-0.102-0.569,0.152-1.358,0.564-1.764l2.739-2.7c0.413-0.406,0.281-0.8-0.29-0.881l-3.74-0.529  c-0.572-0.08-1.236-0.569-1.484-1.093l-1.664-3.521c-0.246-0.523-0.647-0.523-0.895,0l-1.664,3.521  c-0.246,0.523-0.912,1.013-1.484,1.093L51.664,6.31c-0.571,0.082-0.703,0.475-0.291,0.881L54.112,9.891z",
          duration: 300
        }, {
          path: "M36.111,9.891c0.414,0.406,0.666,1.195,0.566,1.764l-0.673,3.86c-0.101,0.569,0.229,0.806,0.737,0.529l3.341-1.831  c0.506-0.279,1.327-0.279,1.833,0l3.34,1.831c0.508,0.276,0.837,0.04,0.737-0.529l-0.673-3.86c-0.1-0.569,0.154-1.358,0.566-1.764  l2.739-2.7c0.412-0.406,0.28-0.8-0.291-0.881l-3.739-0.529c-0.572-0.08-1.238-0.569-1.484-1.093l-1.664-3.521  c-0.247-0.523-0.649-0.523-0.896,0l-1.664,3.521c-0.246,0.523-0.912,1.013-1.484,1.093L33.663,6.31  c-0.571,0.082-0.704,0.475-0.291,0.881L36.111,9.891z",
          duration: 300
        }, {
          path: "M18.111,9.891c0.412,0.406,0.666,1.195,0.564,1.764l-0.672,3.86c-0.1,0.569,0.23,0.806,0.737,0.529l3.341-1.831  c0.506-0.279,1.327-0.279,1.833,0l3.34,1.831c0.507,0.276,0.837,0.04,0.737-0.529l-0.672-3.86c-0.102-0.569,0.152-1.358,0.564-1.764  l2.74-2.7c0.412-0.406,0.28-0.8-0.291-0.881l-3.74-0.529c-0.572-0.08-1.236-0.569-1.484-1.093l-1.664-3.521  c-0.246-0.523-0.648-0.523-0.896,0l-1.663,3.521c-0.248,0.523-0.914,1.013-1.484,1.093l-3.74,0.529  c-0.572,0.082-0.704,0.475-0.291,0.881L18.111,9.891z",
          duration: 300
        }, {
          path: "M95.419,20.313H4.579c-2.313,0-4.187,1.874-4.187,4.187v72.63c0,1.154,0.938,2.094,2.094,2.094h39.35V72.223  c0-1.154,0.938-2.094,2.094-2.094h12.349c1.154,0,2.093,0.938,2.093,2.094v27.002h39.142c1.155,0,2.094-0.938,2.094-2.094V24.5  C99.606,22.188,97.733,20.313,95.419,20.313z M33.254,80.387c0,1.154-0.938,2.092-2.093,2.092H10.857  c-1.155,0-2.092-0.938-2.092-2.092v-8.164c0-1.156,0.938-2.094,2.092-2.094h20.304c1.155,0,2.093,0.938,2.093,2.094V80.387z   M33.254,59.664c0,1.154-0.938,2.094-2.093,2.094H10.857c-1.155,0-2.092-0.939-2.092-2.094v-8.162c0-1.157,0.938-2.093,2.092-2.093  h20.304c1.155,0,2.093,0.938,2.093,2.093V59.664z M33.254,38.943c0,1.156-0.938,2.093-2.093,2.093H10.857  c-1.155,0-2.092-0.938-2.092-2.093V30.78c0-1.156,0.938-2.093,2.092-2.093h20.304c1.155,0,2.093,0.938,2.093,2.093V38.943z   M58.371,59.664c0,1.154-0.938,2.094-2.093,2.094H43.93c-1.156,0-2.094-0.939-2.094-2.094v-8.162c0-1.157,0.938-2.093,2.094-2.093  h12.349c1.154,0,2.093,0.938,2.093,2.093L58.371,59.664L58.371,59.664z M58.371,38.943c0,1.156-0.938,2.093-2.093,2.093H43.93  c-1.156,0-2.094-0.938-2.094-2.093V30.78c0-1.156,0.938-2.093,2.094-2.093h12.349c1.154,0,2.093,0.938,2.093,2.093L58.371,38.943  L58.371,38.943z M91.233,80.387c0,1.154-0.938,2.092-2.094,2.092H68.837c-1.154,0-2.093-0.938-2.093-2.092v-8.164  c0-1.156,0.938-2.094,2.093-2.094H89.14c1.155,0,2.094,0.938,2.094,2.094L91.233,80.387L91.233,80.387z M91.233,59.664  c0,1.154-0.938,2.094-2.094,2.094H68.837c-1.154,0-2.093-0.939-2.093-2.094v-8.162c0-1.157,0.938-2.093,2.093-2.093H89.14  c1.155,0,2.094,0.938,2.094,2.093L91.233,59.664L91.233,59.664z M91.233,38.943c0,1.156-0.938,2.093-2.094,2.093H68.837  c-1.154,0-2.093-0.938-2.093-2.093V30.78c0-1.156,0.938-2.093,2.093-2.093H89.14c1.155,0,2.094,0.938,2.094,2.093L91.233,38.943  L91.233,38.943z",
          duration: 2000
        }
      ],
      dimensions: {
        width: 100,
        height: 100
      }
    }
  };

  $btn = $('#js-btn');

  $feature = $('#feature');

  $memory = $('#memory');

  $dinner = $('#dinner');

  $hotel = $('#hotel');

  $window = $(window);

  $btn.click(function(e) {
    var $e;
    $e = $(e.target);
    $e.addClass('animated fadeOutUp');
    return window.setTimeout(function() {
      return $('html').animate({
        scrollTop: $feature.offset().top - ($window.height() / 2 - $feature.height() / 2)
      }, {
        duration: 500,
        complete: function() {
          $e.hide();
          return paint($memory, memoryPath, function() {
            return paint($dinner, dinnerPath, function() {
              return paint($hotel, hotelPath);
            });
          });
        }
      });
    }, 500);
  });

  paint = function($self, path, cb) {
    cb = cb || function() {};
    return $self.lazylinepainter({
      svgData: path,
      strokeWidth: 2,
      strokeColor: '#fff',
      onStart: function() {
        return $self.next().remove();
      },
      onComplete: function() {
        $self.parent().addClass('active');
        return cb();
      }
    }).lazylinepainter('paint');
  };

}).call(this);

(function() {
  $(function() {
    var $body, $card, $img, $img_area, $lightbox, $p, element_duration, i, image, j, k, l, layer_delay, layer_duration, len, ref, text_delay, text_visible;
    $body = $('body');
    $card = $('.card__img');
    $body.append('<div class="lightbox"></div></div>');
    $lightbox = $('.lightbox');
    $img_area = $('<div class="lightbox__inner"></div>');
    $img = $('<img></>');
    $p = $('<p></p>');
    element_duration = 600;
    layer_duration = 150;
    layer_delay = 150;
    text_visible = 800;
    text_delay = element_duration + text_visible;
    ref = ['city', 'nature'];
    for (j = 0, len = ref.length; j < len; j++) {
      l = ref[j];
      for (i = k = 1; k <= 6; i = ++k) {
        image = new Image;
        image.src = 'images/' + l + '-' + i + '.jpg';
      }
    }
    $card.click(function(e) {
      var $self, location_name, src;
      e.preventDefault();
      $.each([$img, $p], function(i, v) {
        return v.addClass('animated lightbox-fadeInDown');
      });
      $self = $(this);
      location_name = $self.find('img').attr('alt');
      src = $self.attr('href');
      $img.attr('src', src).appendTo($img_area);
      $p.text(location_name).appendTo($img_area);
      $lightbox.fadeIn(layer_duration);
      return window.setTimeout(function() {
        $lightbox.append($img_area);
        return window.setTimeout(function() {
          return $p.removeClass('lightbox-fadeInDown').addClass('fadeOut');
        }, text_delay);
      }, layer_delay);
    });
    return $lightbox.click(function(e) {
      $img.toggleClass('lightbox-fadeOutUp', 'lightbox-fadeInDown');
      return window.setTimeout((function(_this) {
        return function() {
          $img_area.remove();
          $(_this).fadeOut(layer_duration);
          return $.each([$img, $p], function(i, v) {
            return v.removeClass();
          });
        };
      })(this), element_duration + 100);
    });
  });

}).call(this);

(function() {
  var addMarker, drop, init, iterator, locations, map, mapAnimationEnd;

  map = '';

  locations = [[19, -155], [37, -119], [36, -111], [43, -74], [-20, -67], [-7, -39], [51, 0], [22, 5], [46, 7], [51, 13], [-13, 14], [41, 28], [26, 30], [-3, 37], [25, 55], [1, 73], [21, 94], [28, 120], [35, 139], [-33, 151]];

  mapAnimationEnd = false;

  iterator = 0;

  init = function() {
    var mapCanvas, mapOptions, styles;
    mapCanvas = document.getElementById('google-map');
    mapOptions = {
      center: new google.maps.LatLng(17, -5),
      disableDoubleClickZoom: false,
      mapTypeControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      panControl: true,
      panControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER
      },
      scaleControl: false,
      scrollwheel: false,
      streetViewControl: false,
      zoom: 3,
      minZoom: 3,
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.LEFT_CENTER
      }
    };
    styles = [
      {
        stylers: [
          {
            visibility: "off"
          }
        ]
      }, {
        featureType: "water",
        stylers: [
          {
            visibility: "on"
          }, {
            color: "#78cbfa"
          }
        ]
      }, {
        featureType: "water",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "on"
          }, {
            color: "#fafafa"
          }, {
            weight: 0.1
          }
        ]
      }, {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          {
            visibility: "on"
          }, {
            color: "#0f97d6"
          }
        ]
      }, {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [
          {
            visibility: "on"
          }, {
            color: "#45c4ff"
          }, {
            weight: 0.4
          }
        ]
      }, {
        featureType: "administrative.locality",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "on"
          }, {
            color: "#fafafa"
          }, {
            weight: 0.1
          }
        ]
      }
    ];
    map = new google.maps.Map(mapCanvas, mapOptions);
    return map.setOptions({
      styles: styles
    });
  };

  google.maps.event.addDomListener(window, "load", init);

  $('#map').waypoint(function(direction) {
    if (mapAnimationEnd) {
      return;
    }
    mapAnimationEnd = true;
    return drop();
  }, {
    offset: '25%'
  });

  drop = function() {
    var i, results;
    i = 0;
    results = [];
    while (i < locations.length) {
      window.setTimeout((function() {
        return addMarker();
      }), i * 100);
      results.push(i++);
    }
    return results;
  };

  addMarker = function() {
    var location, marker, myLating;
    location = locations[iterator];
    myLating = new google.maps.LatLng(location[0], location[1]);
    marker = new google.maps.Marker({
      position: myLating,
      map: map,
      draggable: false,
      icon: "images/map-marker.png",
      animation: google.maps.Animation.DROP
    });
    return iterator++;
  };

}).call(this);

(function() {
  $('nav li a').smoothScroll();

}).call(this);

(function() {
  var $goToTop, $window, scrollSpeed;

  scrollSpeed = 5;

  $window = $('html, body');

  $goToTop = $('#js-go-to-top');

  $goToTop.click(function(e) {
    e.preventDefault();
    return $window.animate({
      scrollTop: 0
    }, e.pageY / scrollSpeed);
  });

  $('#feature').waypoint(function(direction) {
    if (direction === 'down') {
      return $goToTop.fadeIn(800);
    } else if (direction === 'up') {
      return $goToTop.fadeOut(800);
    }
  }, {
    offset: '50%'
  });

}).call(this);