document.getElementById('IniciarSesion').addEventListener('submit', function(event){
    event.preventDefault(); 
    const username = document.getElementById('user').event;
    const password = document.getElementById('contraseña').event;
    const fail = document.getElementById('blocke');

    const correctUser = "Gonzalo";
    const correctPass = "1234";

    if (username === correctUser && password === correctPass) {
        window.location.href="Web_Menu/index.html";
    } else {
        fail.style.display = "block";
    }
});