$(function(){
  Mousetrap.bind('l', function(){
      $("#agenda ol li[class!='show']:first").slideDown().addClass("show");
  });
    Mousetrap.bind('p', function(){
        $("#paranoja ul li[class!='show']:first").fadeIn(2500).addClass("show");
    });
});
