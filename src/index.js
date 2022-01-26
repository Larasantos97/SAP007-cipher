import cipher from './cipher.js';

const cifrar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const offset = 1

//const decifrar;
//const result;

const Resultado1 = document.getElementById("Resultado1")
Resultado1.innerHTML = cifrar.value

const Resultado2 = document.getElementById("Resultado2")
Resultado2.innerHTML = decifrar.value

 const button1 = document.getElementById("button1");
 button1.addEventListener("click", cifrar);

 const button2 = document.getElementById("button2");
 button2.addEventListener("click", decifrar);

//const cifra.innerHTML = Resultado1.value
console.log(result)
 function cifrar (offset, _String){
 const cifrar = document.getElementById("cifrar")
 result = document.getElementById("Resultado1")
 Resultado1.innerHTML = "cifrar".value
 return result.value = cipher.encode(cifrar,offset);
 

 //offset = Number(document.getElementById("deslocamento").value
 
}

 function decifrar (offset, _String) {
    const decifrar = document.getElementById("decifrar")
    result = document.getElementById("Resultado2")
    Resultado2.innerHTML = "decifrar".value
    return result.value = cipher.decode(decifrar,offset);

    //offset = Number(document.getElementById("deslocamento").value
    
    
 }


 //*function Resultado1, Resultado2(string) {

 //*const Resultado1 = document.getElementById("Resultado")
 //*Resultado1.innerHTML = cifrar.value

 //*const Resultado2 = document.getElementById("Resultado")
 //*}
 








 
console.log(cipher);
