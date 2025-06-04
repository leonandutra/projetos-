
// Função para buscar o endereço pelo CEP usando o ViaCEP
async function buscarEndereco() {
    cep= document.getElementsById("cep").value;

    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const resposta = await fetch(url);
    const dados = await resposta.json();

    if (dados.erro) {
        throw new Error('CEP não encontrado');
    }

    // return dados;
    document.getElementById("resultado").innerHTML = dados;
}

