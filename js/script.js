$(function(){
  Mousetrap.bind('l', function(){
      $("#agenda ol li[class!='show']:first").slideDown().addClass("show");
  });
});
