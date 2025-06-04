// Função para realizar o login
function login() {
    const username = document.getElementById('username').value;
    if (username.trim() === "") {
        alert("Por favor, insira seu nome.");
        return;
    }
    document.getElementById('username-display').innerText = username;
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('chat-screen').style.display = 'block';
}

// Função para enviar uma mensagem
function sendMessage() {
    const messageInput = document.getElementById('message');
    const messageText = messageInput.value.trim();

    if (messageText === "") {
        return; // Não envia mensagens vazias
    }

    // Adiciona a mensagem ao chat
    const messageBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add('sent');
    messageElement.innerHTML = `<span>${messageText}</span>`;
    messageBox.appendChild(messageElement);

    // Simula uma resposta automática após 1 segundo
    setTimeout(() => {
        const responseElement = document.createElement('div');
        responseElement.classList.add('message');
        responseElement.classList.add('received');
        responseElement.innerHTML = `<span>Mensagem recebida: ${messageText}</span>`;
        messageBox.appendChild(responseElement);

        // Rola até a última mensagem
        messageBox.scrollTop = messageBox.scrollHeight;
    }, 1000);

    // Limpa o campo de entrada de mensagem
    messageInput.value = '';
    messageInput.focus();
}

// Impede o envio de mensagens com a tecla Enter
document.getElementById('message').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
    }
});
