const diaSelect = document.getElementById('dia');
for (let i = 1; i<= 31; i++) {
    let option = document.createElement("option")
    option.value = i;
    option.textContent = i;
    diaSelect.appendChild(option);
}

const añoSelect = document.getElementById('Año');
const añoActual = new Date().getFullYear();
for(let i=añoActual; i >= 1900; i--){
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    añoSelect.appendChild(option);
}
