var num1;
var num2;
var total;

function somar (){
    //entrada de dados - inpust
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;
    //convertendo de textos para númerico 
    num1 = parseInt(num1)
    num2 = parseInt(num2)
//processamento, soma
    total = num1 + num2;
//saída, escrever na tela
tela = document.getElementById("resultado");
tela.innerHTML = total;


}

function subtrair (){
    //entrada de dados - inpust
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;
    //convertendo de textos para númerico 
    num1 = parseInt(num1)
    num2 = parseInt(num2)
//processamento, soma
    total = num1 - num2;
//saída, escrever na tela
tela = document.getElementById("resultado");
tela.innerHTML = total; }

function multiplicar (){
    //entrada de dados - inpust
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;
    //convertendo de textos para númerico 
    num1 = parseInt(num1)
    num2 = parseInt(num2)
//processamento, soma
    total = num1 * num2;
//saída, escrever na tela
tela = document.getElementById("resultado");
tela.innerHTML = total; }

function dividir (){
    //entrada de dados - inpust
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;
    //convertendo de textos para númerico 
    num1 = parseInt(num1)
    num2 = parseInt(num2)
//processamento, soma
    total = num1 / num2;
//saída, escrever na tela
tela = document.getElementById("resultado");
tela.innerHTML = total; }

function limpar(){
    document.getElementById("n1").value = " ";
    document.getElementById("n2").value = " ";
    document.getElementById("resultado").innerText = " ";
     
}