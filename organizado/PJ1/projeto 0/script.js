var visitante = 3;
var nome = "Pedro Samuel"

//se o visitante = 3 ganha o prêmio
if (visitante === 3){
alert("Parabéns "+nome+", você ganhou 27 mil reais")
}else {
    alert ( "Perdeu haha!!");
}

//obtém o componente do menu do celular(icone)
var celular = document.querySelector('.celular');
//obétem lista
var listaMenu = document.querySelector('.menu ul');

//evento de click no menu
celular.addEventListener('click', function(){
    listaMenu.classList.toggle('mostraMenu');
});

 