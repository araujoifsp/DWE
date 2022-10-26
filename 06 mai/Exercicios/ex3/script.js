var n1 = prompt("Digite um número");
var n2 = prompt("Digite outro número");
var n3 = prompt("Digite outro número");
parseInt(n1);
parseInt(n2);
parseInt(n3);

if(n1 > n2 && n2 > n3) {
    alert("O maior número é: "+n1);
}
else if(n1 > n3 && n3 > n2){
    alert("O maior número é: "+n1);
}
else if(n2 > n1 && n2 > n3){
    alert("O maior número é: "+ n2);
}
else if(n2 > n3 && n3 > n1){
    alert("O maior número é: "+ n2);
}
else if(n3 > n1 && n1 > n2){
    alert("O maior número é: "+ n3);
}
else{
    alert("O maior número é: "+ n3);
}