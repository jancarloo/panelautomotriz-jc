'use_strict';
productos().then(r=>{
    //console.log('lista',r);
let html="";
//console.log('mi lista object',r,Object.keys(r));

//console.log(Object.keys(r));
let numcontador = 0;


Object.keys(r).forEach(id=>{
numcontador++;
    /* console.log(numcontador);
    console.log(id); */
    const info = r[id];
    //const url = window.location;
const url = 'detalles/'+info.id;
//console.log(url);

    if (numcontador<=3) {
        html+=`<div class="col-sm-4 col-xs-12">
        <div class="b-world__item wow zoomInLeft" data-wow-delay="0.3s" data-wow-offset="100">
            <img class="img-responsive" src="" alt="wolks" />
            <div class="b-world__item-val">
                <span class="b-world__item-val-title">`+ info.statu+`</span>
                <div class="b-world__item-val-circles">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="m-empty"></span>
                </div>
                <span class="b-world__item-num">4.1</span>
            </div>
            <h2>`+ info.marca+`$`+ info.priceTaxIncl+`</h2>
            <p>`+ info.descripcion+`</p>
            <a href="`+ url+`" class="verDescripcion btn m-btn">READ MORE<span class="fa fa-angle-right"></span></a>
        </div>       
        </div>`;
    }
       
})

//console.log(html);

 $("#secautogeneradas").html(html);

 $('.verDescripcion').on('click', function (event) {
    event.preventDefault();
    navegar('detalles');
 })

 $(".navegar").click(function(event){
    //console.log("navegar");
    
  event.preventDefault();
  let pagina = $(this).data('pagina');
  $('.contenido').load(pagina);

});

    
});