//5. crear un input y un button, cuando le demos al boton, se añadira el texto que hemos puesto en el input en un div vacio. Recuerda se añadirá el texto, no se machaca lo que haya en el div.
input_texto=document.querySelector("#texto");
btn=document.querySelector("#btn");
container=document.querySelector(".div_texto")
Form=document.querySelector("#form");

btn.addEventListener("click",function(e){
    e.preventDefault();
    let texto=input_texto.value;
  console.log(texto)

  container.innerHTML+=texto+"<br>";

})
btn_clean.addEventListener("click",function(){
form.clean();   
})

