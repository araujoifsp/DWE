var texto = prompt("Digite uma sequencia de caracteres");

var array = texto.split("");
var texto2 = array.sort();
document.write("Sequencia original: "+texto+"<br>");
document.write("Sequencia Crescente: "+texto2+"<br>");