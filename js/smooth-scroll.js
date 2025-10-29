$(function() {
  // href属性が "#" で始まるすべての<a>タグにクリックイベントを設定
  $('a[href^="#"]').on('click', function(event) {
    // リンクのデフォルトの挙動（履歴の追加とページ遷移）をキャンセル
    event.preventDefault();

    // クリックされたリンクのhref属性から、ターゲットのIDを取得
    const targetId = this.hash;
    const speed = 50; // スクロール速度

    // hrefが"#"だけで、IDが指定されていない場合（ページトップへ戻るボタンなど）
    if (targetId === '' || targetId === '#') {
      $('html, body').animate({
        scrollTop: 0
      }, speed, 'swing');
      return; // これ以降の処理は行わない
    }

    const $target = $(targetId);

    // ターゲットが存在する場合のみ処理を実行
    if ($target.length) {
      // ターゲット要素の上端の座標を取得
      const targetPosition = $target.offset().top;

      // 取得した座標までスムーズにスクロール
      $('html, body').animate({
        scrollTop: targetPosition
      }, speed, 'swing');
    }
  });
});
