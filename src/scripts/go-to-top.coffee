scrollSpeed = 5
$window = $ 'html, body'
$goToTop = $ '#js-go-to-top'

$goToTop.click (e) ->
    e.preventDefault()
    $window
      .animate
        scrollTop: 0
      , e.pageY / scrollSpeed

$ '#feature'
  .waypoint (direction) ->
    if direction is 'down'
      $goToTop.fadeIn 800
    else if direction is 'up'
      $goToTop.fadeOut 800
  ,
    offset: '50%'
