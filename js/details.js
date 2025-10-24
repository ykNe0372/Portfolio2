let accordionDetails = '.js-details';
let accordionSummary = '.js-details-summary';
let accordionContent = '.js-details-content';
let speed = 300

$(document).ready(function() {
  // 初期状態で「－」を表示するために、すべてのaccordionSummaryにis-activeクラスを付与
  $(accordionSummary).addClass("is-active");

  // 初期状態でアコーディオンを閉じた状態にする
  $(accordionDetails).attr("close", "true");
});

$(accordionSummary).each(function() {
  $(this).on("click", function(event) {
  	// デフォルトの挙動を無効化
    event.preventDefault();
    // summaryにis-activeクラスを切り替え
    $(this).toggleClass("is-active");

    if ($(this).parent($(accordionDetails)).attr("open")) {
      // アコーディオンを閉じるときの処理
      $(this).nextAll($(accordionContent)).slideUp(speed, function() {
        // アニメーションの完了後にopen属性を取り除く
        $(this).parent($(accordionDetails)).removeAttr("open");
      });
    } else {
      // アコーディオンを開くときの処理
      // open属性を付ける
      $(this).parent($(accordionDetails)).attr("open", "true");
      // いったんdisplay:none;してからslideDownで開く
      $(this).nextAll($(accordionContent)).hide().slideDown(speed);
    }
  })
})