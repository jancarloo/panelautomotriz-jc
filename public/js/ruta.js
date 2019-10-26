const rutas = {
    'detalles':{
        titulo  : 'Detalles del automovil',
        carga: 'detalles.html'
    },
    'contacto':{
        titulo  : 'Detalles del automovil',
        carga: 'contacto.html'
    },    
    'about':{
        titulo  : 'Detalles del automovil',
        carga: 'about.html'
    }
}

function navegar(ruta){
    let load = './contenido.html'
    if(ruta!=''&&ruta!=undefined)
        if( Object.keys( rutas ).includes(ruta) )
            load='./'+rutas[ruta].carga;
                            
        else
            load='./404.html';
    
   //history.pushState({key:ruta}, '', ruta);
    $(".contenido").load(load);
}

function rutaActual(){
    return window.location.pathname.split('/');
}





$(document).ready(function(){

    


    $(".header").load('./header.html');
    const ruta = rutaActual();
    navegar(ruta[1]);

    console.log("hooooooool",ruta);

        

    $(".footer").load('./footer.html');

});
