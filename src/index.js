import cipher from './cipher.js';

const button1 = document.getElementById("button1");

 

 const button2 = document.getElementById("button2");
 
 function cifrar (){
 let cifrar = document.getElementById("cifrar").value
 let deslocamento = document.getElementById("deslocamento").value
 const Resultado1 = cipher.encode(parseInt(deslocamento),cifrar);
 document.getElementById("Resultado1").value = Resultado1
}

button1.addEventListener("click", cifrar);

function decifrar (){
let decifrar = document.getElementById("decifrar").value
let deslocamento = document.getElementById("deslocamento").value
const Resultado2 = cipher.decode(parseInt(deslocamento),decifrar);
document.getElementById("Resultado2").value = Resultado2

  }
button2.addEventListener("click", decifrar);






//Não é preciso criar variáveis para tudo que fizer, basta criar uma função e dentro tudo relacionado.
//Nas variáveis acima, antes das funções é a criação de um evento de acordo com oque o usuário faz, por exemplo, a resposta aparecer somente assim que clicar no botão.
//O getElementByID, pega um elemento e faz um "evento" de acordo com o ID.