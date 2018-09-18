$(document).ready(function(){
    /* back to top */
    var toBack = $('#toTop');
    $(window).on('scroll', function(){
      if($(window).scrollTop() >= 190){
        toBack.fadeIn();
      }else{
        toBack.fadeOut();
      }
    });

    toBack.on('click', function(){
      $('html, body').animate({scrollTop:0},1000)
    });
    //Year
    $('#year').text(new Date().getFullYear());
    //ScrollSpy
    $('body').scrollspy({target: '#main-nav'});
    //Smooth Scroll
    $("#main-nav a").on('click', function (event) {
        if (this.hash !== "") {
          event.preventDefault();
  
          const hash = this.hash;
  
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function () {
  
            window.location.hash = hash;
          });
        }
      });  
});