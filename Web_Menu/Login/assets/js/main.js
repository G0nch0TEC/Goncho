document.getElementById('IniciarSesion').addEventListener('submit', function(event){
    event.preventDefault(); 
    const username = document.getElementById('interes1').value;
    const password = document.getElementById('interes2').value;

    if (username === "Gonzalo" && password === "1234") {
        window.location.href="../../index.html";
    } else {
        alert("Contraseña o Usuario Incorrecto")
        interes1.value = "";
        interes2.value = "";
    }
});