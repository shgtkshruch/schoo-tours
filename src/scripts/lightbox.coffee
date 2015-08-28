$ ->
  $body = $ 'body'
  $card = $ '.card__img'

  $body.append '<div class="lightbox"></div></div>'
  $lightbox = $ '.lightbox'
  $img_area = $ '<div class="lightbox__inner"></div>'
  $img = $ '<img></>'
  $p = $ '<p></p>'

  # animation configuration
  element_duration = 600 # 写真とテキストのアニメーションのDuration (_lightbox.scss line 2)
  layer_duration = 150
  layer_delay = 150 # layerが表示されてから少し待つと滑らかに見える
  text_visible = 800 # textが見える時間
  text_delay = element_duration + text_visible

  # 画像のプリロード
  for l in ['city', 'nature']
    for i in [1..6]
      image = new Image
      image.src = 'images/' + l + '-' + i + '.jpg'

  # open lightbox
  $card.click (e) ->
    e.preventDefault()

    $.each [$img, $p], (i, v) ->
      v.addClass 'animated lightbox-fadeInDown'

    # Lightboxに表示する画像のURLを取ってくる
    $self = $ @
    location_name = $self
      .find 'img'
      .attr 'alt'
    src = $self.attr 'href'

    # 画像と場所を表す文字を追加
    $img
      .attr 'src', src
      .appendTo $img_area
    $p
      .text location_name
      .appendTo $img_area

    # 一番下のレイヤを表示
    $lightbox.fadeIn layer_duration

    # 一番下のレイヤが表示されるのをlayer_delay分まってから、写真とテキストを表示
    window.setTimeout ->
      $lightbox.append $img_area

      # テキストだけはtext_delay分待ってからFadeout
      window.setTimeout ->
        $p
          .removeClass 'lightbox-fadeInDown'
          .addClass 'fadeOut'
      , text_delay

    , layer_delay

  # close lightbox
  $lightbox.click (e) ->
    # 画像をFadeout
    $img.toggleClass 'lightbox-fadeOutUp', 'lightbox-fadeInDown'

    # 写真がFadeoutするのを待ってから、追加した要素をすべて削除、初期化する
    window.setTimeout =>
      # 要素を表示していたエリアを削除
      $img_area.remove()

      # レイヤーをFadeout
      $ @
        .fadeOut layer_duration

      # 写真とテキストを初期化
      $.each [$img, $p], (i, v) ->
        v.removeClass()

    , element_duration + 100 # 100足したほうが滑らかに見える
