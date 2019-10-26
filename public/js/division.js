$(document).ready(function(){
   
  $(".header").load("./header.html");
  $(".contenido").load("./contenido.html");
  $(".footer").load("./footer.html");

  $(".navegar").click(function(event){
    console.log("navegar");
    
  event.preventDefault();
  let pagina = $(this).data('pagina');
  $('.contenido').load(pagina);

});
}) 

