'use_strict';

$(document).ready(function () {
    if(rutaActual()[2]!=''&&rutaActual()[2]!=undefined){
        producto(rutaActual()[2]).then(r=>{
            console.log(r);

            let html= '';
           /*  r.images.forEach(e => {
                html+=`
                `;
            }); */

          $(".nombremarca").html("$"+r.marca)


            
        })
        
    } else{
        navegar('contacto');
    }

    

   
})