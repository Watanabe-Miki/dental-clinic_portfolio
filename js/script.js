
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  /* floating */
  function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200){
      $('#page-top').removeClass('DownMove');
      $('#page-top').addClass('UpMove');
    }else{
      if($('#page-top').hasClass('UpMove')){
        $('#page-top').removeClass('UpMove');
        $('#page-top').addClass('DownMove');
      }
    }
  }
  
  // スクロールした際の動きの関数を呼ぶ
  $(window).scroll(function () {
    PageTopAnime();
  });

  // #page-topをクリックした際の設定
  $('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
  });

  
  /* ドロワー */
  $("#MenuButton").on("click", function(e){
      e.preventDefault();
      $(this).toggleClass("is-active"); 
      $(".js-drawer-content").toggleClass("is-active"); 
      $(".js-drawer-background").toggleClass("is-active"); 

      return false;
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

});
