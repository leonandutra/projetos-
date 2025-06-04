// Dados de login simulados
const validEmail = "leo@gmail.com";
const validSenha = "senha123";
const validCpf = "12345678901";

// Função para gerar saldo e transações falsas
function gerarDadosFalsos() {
    // Geração de saldo aleatório entre R$ 100,00 e R$ 1000,00
    const saldo = (Math.random() * (1000 - 100) + 100).toFixed(2);
    
    // Geração de histórico de transações
    const transacoes = [];
    const tipos = ['Depósito', 'Retirada'];
    for (let i = 0; i < 5; i++) {
        const tipo = tipos[Math.floor(Math.random() * tipos.length)];
        const valor = (Math.random() * 500 + 50).toFixed(2); // Gera valores entre R$ 50 e R$ 500
        const data = new Date();
        transacoes.push({
            data: data.toLocaleString(),
            tipo,
            valor
        });
    }

    return { saldo, transacoes };
}

// Função para exibir o dashboard
function exibirDashboard(saldo, transacoes) {
    document.getElementById('user-dashboard').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('error-message').style.display = 'none';

    document.getElementById('balance').textContent = saldo;

    const transactionHistory = document.getElementById('transaction-history');
    transactionHistory.innerHTML = '';
    transacoes.forEach(transacao => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transacao.data}</td>
            <td>${transacao.tipo}</td>
            <td>R$ ${transacao.valor}</td>
        `;
        transactionHistory.appendChild(row);
    });
}

// Função para login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cpf = document.getElementById('cpf').value;

    // Validação simples de login
    if (email === validEmail && senha === validSenha && cpf === validCpf) {
        const dadosFalsos = gerarDadosFalsos();
        exibirDashboard(dadosFalsos.saldo, dadosFalsos.transacoes);
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});
