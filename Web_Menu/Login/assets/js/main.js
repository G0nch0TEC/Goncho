document.getElementById('IniciarSesion').addEventListener('submit', function(event){
    event.preventDefault(); 
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;

    if (username === "Gonzalo" && password === "1234") {
        window.location.href="../../index.html";
    } else {
        alert("Contraseña o Usuario Incorrecto")
        user.value = "";
        pass.value = "";
    }
});