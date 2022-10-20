// google form
let $form = $('#js-form')

$form.submit(function(e) { 
  $.ajax({ 
   url: $form.attr('action'),
   data: $form.serialize(), 
   type: "POST", 
   dataType: "xml", 
   statusCode: { 
      0: function() { 
        //送信に成功したときの処理 
        $form.slideUp();
        $('#js-success').slideDown()
      }, 
      200: function() { 
        //送信に失敗したときの処理 
        $form.slideUp();
        $('#js-error').slideDown()
      }
    } 
  });
  return false; 
}); 

// スムーススクロール
jQuery('a[href^="#"]').on('click', function() {

  var header = jQuery('.header').innerHeight();
  var id = jQuery(this).attr('href');
  var position = 0;
  if ( id != '#') {
    position = jQuery(id).offset().top - header;
  }
  jQuery('html, body').animate({
    scrollTop: position
  },
  300);
});


jQuery(window).on('scroll', function() {
  if ( 2500 < jQuery(this).scrollTop()) {
    jQuery('.to-top').addClass('is-show');
  } else {
    jQuery('.to-top').removeClass('is-show');
  }
});

// hamburger
jQuery('.drawer-icon').on('click', function(e) {
  e.preventDefault();

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');
  jQuery('.drawer-icon__bars').toggleClass('active');

  return false;
});

jQuery('.close').on('click', function() {
  jQuery('.drawer-icon').removeClass('is-active');
  jQuery('.drawer-content').removeClass('is-active');
  jQuery('.drawer-background').removeClass('is-active');
  jQuery('.drawer-icon__bars').removeClass('active');
});

// ローディングメニュー
window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('loading').classList.remove('active');
  }, 2000)
})
//最低でも５秒で終わる
setTimeout(function() {
  document.getElementById('loading').classList.remove('active');
}, 5000)