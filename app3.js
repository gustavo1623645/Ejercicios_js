//6. Crear dos input de números y un botón, al pulsar el botón, mostrar en un alert quien es el mayor de los dos.
num1=document.querySelector("#num1");
num2=document.querySelector("#num2");
btn_mostrar=document.querySelector("#btn_number")
form3=document.querySelector("#form3")

btn_mostrar.addEventListener("click",function(e){
    e.preventDefault();
    let numero1=num1.value;
    let numero2=num2.value;
   
    if(numero1>numero2){
  alert(`el numero  ${numero1} es mayor que ${numero2}`)

    }else{

    alert(`el numero  ${numero2} es mayor que ${numero1}`)
    }
})
