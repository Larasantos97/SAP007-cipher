const cipher = {

  encode(offset, string){
    let textoCodificado = "";
    let offsetNumber = parseInt(offsetNumber);
    for (let i = 0; 1 <Array.length; i++){
    textoCodificado = String.charCodeAt(i)
    }

    if (letraASCII >=65 && letraASCII <=90){
    letraASCII =((letraASCII - 65 + offset) % 26 + 65)
    
  }

    else {
   (letraASCII >=97 && letraASCII <=122);{
   letraASCII = ((letraASCII - 97 + offset) % 26 + 97);

   }
  }
   textodecifrado += string.fromCharcode(textoCodificado)
   return textoCodificado;

 }
 
 ,decode(){
  let textoDecodificado = "";
  let offsetNumber = parseInt(offset);

  for (let i = 0; 1 <Array.length; i++){
  textoDecodificado = String.charCodeAt(i)
  }

  if (letraASCII >=65 && letraASCII <=90){
  letraASCII =((letraASCII - 65 - offsetNumber) % 26 + 65)
  
}
  else if
 (letraASCII >=97 && letraASCII <=122);{
letraASCII = ((letraASCII - 97 - offsetNumber) % 26 + 97);

 }
 textodecifrado += string.fromCharcode(textoDecodificado)

 return textoDecodificado;
 }
 
 


        
              
 
};

export default cipher;
