// Exemplo básico de script de validação de login (não funcional sem backend)
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === "admin" && password === "senha123") {
        window.location.href = "dashboard.html"; // Página de dashboard após login bem-sucedido
    } else {
        alert("Credenciais incorretas, tente novamente.");
    }
});
