var i = 0;
document.write("<h2>Lista de multiplos de 3 ou 5</h2><ul>")
for(i = 0; i <= 1000;i++){
    
    if(i % 3 === 0 || i % 5 === 0){
        document.write("<li>"+i.toString()+"</li>");
    }
}
