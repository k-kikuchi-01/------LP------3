// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');
// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {
  // .hamburgerの表示・非表示を繰り返す
if($('nav').hasClass('hamburger-menu-active')){
  hamburger.removeClass('hamburger-menu-active', 100);
}else{
  hamburger.addClass('hamburger-menu-active');
}
});
// 画面幅のサイズが変わったら
$(window).on('resize', function () {
  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-menu-active');
});
// ハンバーガーメニューをクリックしたら
$('.hamburger-menu-list-group').on('click', function () {
  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-menu-active');
});
// タブ
$('#smarttab').smartTab({
  autoAdjustHeight: false,
  enableUrlHash: false // タブidにもとづいたURLハッシュの付与を無効
});
// slick
$('.gallery__slick').slick({
  // infinite: true,
  dots: true,
  arrows: false,
  // prevArrow: '<img src="images/cover/cover_arrow_left.svg" class="slide-arrow prev-arrow">',
  // nextArrow: '<img src="images/cover/cover_arrow_right.svg" class="slide-arrow next-arrow">',
  fade: true
});
// アコーディオンのタイトルがクリックされたら
$('.faq__box-top').on('click', function(e) {

  // .accordion-contentを選択
  var content = $(this).next('.accordion-content');

  // .accordion-contentを表示・非表示
  content.slideToggle();
  //openクラスをつける
  $(this).toggleClass("open");
});