//7. Crear un botón que al pulsarlo genere una lista de 10 números aleatorios en un select vacio. Al pulsar de nuevo, se reseteara la lista.

 /*btn_generate=document.querySelector("#btn_generate")
*/
let lista=[];

  function aleatorio(inferior, superior) {
    for(let i=0;i<10;i++){
    var numPosibilidades = superior - inferior;
    var aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    lista[i]= inferior + aleatorio;
    console.log(lista[i])

    }
    createNode();
    
    
}


 function createNode(){

   let select=document.createElement("select");
   for(let i=0;i<10;i++){
   let opcion1=document.createElement("option");
   opcion1.setAttribute("value","value1")
   let opcion1Texto=document.createTextNode(lista[i]);
  opcion1.appendChild(opcion1Texto)
  select.appendChild(opcion1)
  document.body.appendChild(select)
   }

 }



 
 btn_generate.addEventListener("click",aleatorio(0,100));







/*
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generarNumeros() {

  let elementos = document.getElementById("elementos");

  let opcionesGeneradas = "";
  for (let i = 0; i < 10; i++) {
    opcionesGeneradas += "<option>" + getRandomInt(1, 100) + "</option>";
  }

  elementos.innerHTML = opcionesGeneradas;

}
  
*/