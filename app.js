//. Crea dos radiobuttons, cuando uno de ellos se seleccione que muestre un mensaje diciendo que opción se selecciono.
opciones=document.getElementsByName("opciones");

 function show_messaje(e){
     alert("A seleccionado la  " + e.target.value)
   
 }