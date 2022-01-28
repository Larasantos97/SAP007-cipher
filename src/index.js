import cipher from './cipher.js';

const offset = 1

 const button1 = document.getElementById("button1");
 button1.addEventListener("click", cifrar);

 const Resultado1 = document.getElementById("Resultado1");

 const button2 = document.getElementById("button2");
 button2.addEventListener("click", decifrar);

 const Resultado2 = document.getElementById("Resultado2");
 

 function cifrar (){
 const cifrar = document.getElementById("cifrar").value
 Resultado1.value = cipher.encode(cifrar,offset);
 
}

function decifrar (){
const decifrar = document.getElementById("decifrar").value
Resultado2.value = cipher.decode(decifrar,offset);
   
  }
 








 
console.log(cipher);
