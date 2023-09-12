// Obtener la hora y fecha actual
const fecha = new Date();

// Obtener el número de visitantes
let visitas = 0;
if(localStorage.getItem('visitas')){
    visitas = parseInt(localStorage.getItem('visitas'));
}
visitas++;

// Obtener la dirección IP
async function obtenerDireccionIP() {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
}
obtenerDireccionIP().then((direccionIP) => {
    // Almacenar los datos en el local storage
    localStorage.setItem('fecha', fecha, );
    localStorage.setItem('visitas', visitas,);
    localStorage.setItem('direccionIP', direccionIP,);
});


const visitorCount = document.getElementById('visitor-count');
visitorCount.textContent = visitas;