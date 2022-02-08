const cipher = {

  encode: function (offset, string) {
    let textoCodificado = "";
    for (let i = 0; i < string.length; i++) {
      let letraASC = string.charCodeAt(i); // FOR é um loop, e neste caso ela vai guardar a letra que for codificada
      if (letraASC >= 65 && letraASC <= 90) { //Salva um número que existe na tabela ASCII
        let letraCodificada = ((letraASC - 65 + offset) % 26)+ 65;
        textoCodificado += String.fromCharCode(letraCodificada); // O código recebido por ele de acordo com a tabela ASCII é tranformado em texto/string

      }
      else if
       (letraASC >= 97 && letraASC <= 122) {
        let letraCodificada = ((letraASC - 97 + offset) % 26) + 97;
        textoCodificado += String.fromCharCode(letraCodificada);  // O código recebido por ele de acordo com a tabela ASCII é tranformado em texto/string
      }
     
      //console.log(letraASC);
      console.log(textoCodificado);

    }
    return textoCodificado;
  },

  decode: function (offset, string) {
    let textoDecodificado = "";
    for (let i = 0; i < string.length; i++) {
      let letraASC = string.charCodeAt(i); 
      if (letraASC >= 65 && letraASC <= 90) { 
        let letraDecodificada = ((letraASC + 65 - offset) % 26)+ 65;
        textoDecodificado += String.fromCharCode(letraDecodificada); 

      }
      else if
       (letraASC >= 97 && letraASC <= 122) {
        let letraDecodificada = ((letraASC - 122 - offset) % 26) + 122;
        textoDecodificado += String.fromCharCode(letraDecodificada); 
      }
      else if 
       (letraASC == 128 && letraASC == 135) {
        let letraDecodificada = ((letraASC - 65 - offset) % 26) + 65;
        textoDecodificado += String.fromCharCode(letraDecodificada);
      }
console.log(textoDecodificado)
    }
    return textoDecodificado;
  }
}



export default cipher;


// Isto faz com que a letra transformada seja recebida junto ao valor do deslocamento