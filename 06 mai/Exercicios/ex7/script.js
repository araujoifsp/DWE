const Primo = (num) => {
    for (let i = 2; i < num; i++)
        if (num % i === 0) {
        return false;
        }
    return num > 1;
};
var i = 0;
document.write("<table border='1'><th colspan='100%'>Tabela números primos</th><tr>");
for(i = 0; i <= 200;i++){
    if(Primo(i)){
            document.write("<td>"+i+"</td>");
        }
}
document.write("</tr></table>");