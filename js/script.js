$(document).ready(function(){
  $("main").hide();
  $("#did-u-kno").hide();
  $("#resources").hide();

  $("header a").on("click", function(){
    $("main").show();
  });

  $("#movie").on("click", function(){
    $("#did-u-kno").show();
  });

  $("#did-u-kno a").on("click", function(){
    $("#resources").show();
  });
});
