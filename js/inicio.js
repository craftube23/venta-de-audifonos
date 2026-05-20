// Esperamos a que todo el HTML de la página esté cargado
document.addEventListener("DOMContentLoaded", () => {
    const caja = document.getElementById("cajaAudifonos");

    // 1. Agregamos la animación de inicio (aparecer desde abajo)
    caja.classList.add("animacion-inicio");

    // 2. Escuchamos cuándo termina esa animación de inicio
        document.addEventListener("DOMContentLoaded", () => {
        const caja = document.getElementById("cajaAudifonos");

        caja.classList.add("animacion-inicio");
    });
});