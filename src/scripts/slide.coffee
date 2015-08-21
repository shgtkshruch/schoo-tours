$imgs = $ '#js-slide'
  .find 'img'
$prev = $ '#js-slide-prev'
$next = $ '#js-slide-next'

duration = 1000
interval = 7000
slideNum = $imgs.length
index = slideNum
nowImg = $imgs.first()
slideTimer = ''
nowFade = false

# 初期化処理
# 一番目の要素は表示する
$imgs.first().show()

startSlideTimer = ->
  slideTimer = window.setInterval ->
    slide ++index
  , interval

slide = ->
  nowFade = true
  nextImg = $imgs[index % slideNum]

  $ nowImg
    .fadeOut duration
  $ nextImg
    .fadeIn duration, ->
      nowImg = @
      nowFade = false

$prev.click (e) ->
  if nowFade then return
  clearInterval slideTimer
  --index
  slide()
  startSlideTimer()

$next.click (e) ->
  if nowFade then return
  clearInterval slideTimer
  ++index
  slide()
  startSlideTimer()

window.addEventListener 'DOMContentLoaded', startSlideTimer, false
