$(document).ready(function(){
  $("main").hide();
  $("#did-u-kno").hide();
  $("#resources").hide();

  $("header a").on("click", function(e){
    e.preventDefault();
    $("main").show();
    var target= $("main");
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 1000);
  });

  $("#movie").on("click", function(e){
    e.preventDefault();
    $("#did-u-kno").show();
    var target= $("#did-u-kno");
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 1000);
  });

  $("#did-u-kno a").on("click", function(e){
    e.preventDefault();
    $("#resources").show();
    var target= $("#resources");
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 1000);
  });
  
});
