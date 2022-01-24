import cipher from './cipher.js';
 
const button1 = document.getElementById("button1");
 button1.addEventListener("click", cifrar);

 const button2 = document.getElementById("button2");
 button2.addEventListener("click", decifrar);

//const cifra.innerHTML = Resultado1.value

 function cifrar (){
 cifra = document.getElementById("cifrar")
 result = document.getElementById("Resultado1")
// Resultado1.innerHTML = "cifrar".value
 return result.value = cipher.encode(cifra,offset);

 //offset = Number(document.getElementById("deslocamento").value
 
}

 function decifrar () {
    decifra = document.getElementById("decifrar")
    result = document.getElementById("Resultado2")
    return result.value = cipher.decode(decifra,offset);

    //offset = Number(document.getElementById("deslocamento").value
    
    
 }


 //*function Resultado1, Resultado2(string) {

 //*const Resultado1 = document.getElementById("Resultado")
 //*Resultado1.innerHTML = cifrar.value

 //*const Resultado2 = document.getElementById("Resultado")
 //*Resultado2.innerHTML = decifrar.value
 //*}
 








 
console.log(cipher);
