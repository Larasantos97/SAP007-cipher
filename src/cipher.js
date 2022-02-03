const cipher = {

  /*encode: function (offset, text){
    let textoCodificado = "";
    //let letrasASC = String.length;
    //let offsetNumber = parseInt(offsetNumber);
    for (let i = 0; i < String.length; i++){
    let letrasASC = letrasASC.charCodeAt(i); //Cada letra/string de uma palavra se tornará como o código ASCII

    }
  
    if (letrasASC >=65 && letrasASC <=90){
    textoCodificado += String.fromCharCode(((letrasASC - 65 + offset) % 26) + 65);
  }
    else if (letrasASC => 97 + offset && letrasASC <=122){
    textoCodificado += String.fromCharCode((letrasASC - 97 + offset) % 26 + 97);
   }
   else if (letrasASC == 32){
   textoCodificado += text.CharAt(i);
  }
  
   return textoCodificado;

 },*/
 
 encode: function (offset, string){

  let textoCodificado = "";

  for (let i = 0; i < string.length; i++){ 
    let letraASC = string.CharCodeAt(i); // FOR é um loop, e neste caso ela vai guardar a letra que for codificada
    if (letraASC >=65 && letraASC <=90){ //Salva um número que existe na tabela ASCII
      letraASC = ((letraASC - 65 + offset) % 26 + 65); // Isto faz com que a letra transformada seja recebida junto ao valor do deslocamento
    }
    else if 
    (letraASC >=97 && letraASC <=122){
    letraASC = ((letraASC - 97 + offset) % 26 + 97);
    }
    textoCodificado += String.fromCharCode(letraASC); // O código recebido por ele de acordo com a tabela ASCII é tranformado em texto/string
    
  }
  return textoCodificado;
  
},

decode: function(offset, string){
  let textoDecodificado = "";
  for (let i = 0; i < string.length; i++){
    let letraASC = string.CharCodeAt(i);
    if (letraASC >=65 && letraASC <=90){
      letraASC = ((letraASC + 65 - offset) % 26 + 65);
    }
    else if 
    (letraASC >=97 && letraASC <=122){
      letraASC = ((letraASC - 122 - offset) % 26 + 122);
    }
    else if (letraASC ==128 && letraASC ==135){
      letraASC = ((letraASC - 65 - offset) % 26 + 65);
    }
    textoDecodificado += String.fromCharCode(letraASC);
  }
  return textoDecodificado;
  
}

}
 

 /*,decode(offset, string){
  let textoDecodificado = "";
  let offsetNumber = parseInt(offset);

  for (let i = 0; i <Array.length; i++){
  textoDecodificado = String.charCodeAt(i)
  }

  if (letraASCII >=65 && letraASC <=90){
  letraASC =((letraASC - 65 - offsetNumber) % 26 + 65)
  
}
  else if
 (letraASCII >=97 && letraASCII <=122);{
letraASC = ((letraASC - 97 - offsetNumber) % 26 + 97);

 }
 textodecifrado += string.fromCharcode(textoDecodificado)

 return textoDecodificado;
 }
 
 


        
              
 
};

export default cipher;*/

export default cipher;