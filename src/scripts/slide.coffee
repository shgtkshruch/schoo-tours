$imgs = $ '#js-slide'
  .find 'img'

index = 0
duration = 1000
interval = 7000
slide_num = $imgs.length

# 初期化処理
# 一番目の要素は表示する
$imgs.first().show()

startSlide = ->
  window.setInterval ->
    $now_img = $ $imgs[index%slide_num]
    $next_img = $ $imgs[(index+1)%slide_num]

    $now_img.fadeOut
      duration: duration
    $next_img.fadeIn
      duration: duration

    index++

  , interval

window.addEventListener 'load', startSlide, false
