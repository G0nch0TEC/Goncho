document.getElementById('IniciarSesion').addEventListener('submit', function(event){
    event.preventDefault(); 
    const username = document.getElementById('user').value;
    const password = document.getElementById('contraseña').value;

    if (username === "Gonzalo" && password === "1234") {
        window.location.href="Web_Menu/index.html";
    } else {
        
    }
});