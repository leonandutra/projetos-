//criando um variável, espaço de memoria que armazena um valor
var jogador = "X";

// uma função executada alguma ação, quando chamada
//celula é um parâmetro, o valor da celular clicada é passada para a função
function jogar(celula){

// se a celula estiver vazia, pode marcar
// == igual
// ! = Diferente
// > Maior
// < Menor
if(celula.innerHTML == ""){
// escrever na célula o "X" ou "O"
celula.innerHTML = jogador;

if( jogador == "X"){
    jogador = "O"   // alterna a variavel para "O"
    celula.style.backgroundColor = "red" //altera cor do fundo
    celula.style.color = "black"         //altera cor da letra
} else{
    jogador = "X"  // se não alternar a váriavel
    celula.style.backgroundColor = "White" //altera cor do fundo
    celula.style.color = "black"         //altera cor da letra
}

}

}

function reiniciar(){
    //criar lista com todos os quadrados 
    var celula = document.querySelectorAll("td");

for(var contador=0; contador < 9; contador ++){
celula[contador].innerHTML = "";
celula[contador].style.backgroundColor = "";
}
}

sortear();
function sortear(){
    //lista / vetor
    //entre aspas é ums string: tipo de dados de texto
    var nomes = ['Isabela', 'Bruno', 'rafael', 'Angelo'];
var nome1 = nomes[ Math.floor (Math.random() * nomes.length) ];
var nome2 = nomes[ Math.floor (Math.random() * nomes.length) ];

// enquanto nome1 === nome2
while(nome1 == nome2){
    sortear();
}

alert("jogador: " + nome1 + "Vs" + nome2);



 /*alert("Sorteio de número com radom" + Math.random());
 alert("Encontrando posição da lista: " + Math.random() * nomes.length);
 alert("Encontrando posição da lista 2: " +Math.floor(Math.random() *nomes.length));
*/
}


function adicionar(){
    //pega o texto do input com id="nome"
    var nome = document.getElementById("nome").value;
    //adiciona nome na lista
    nomes.push(nome);

}