document.getElementById("loginbut").addEventListener("click", handleLogin);
document.getElementById("senha").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        handleLogin(e);
    }
});

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email === "teste@gmail.com" && senha === "123") {
        window.location.href = "monitoramento.html";
    }
}
