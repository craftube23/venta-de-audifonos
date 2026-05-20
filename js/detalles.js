document.addEventListener("DOMContentLoaded", () => {
    // 1. Lista con las rutas de tus imágenes (¡Revisa si es assets o asess!)
    const imagenes = [
        "/asess/img/audifonos.png",
        "/asess/img/airpods-pro-2.png",
    ];
    
    let indiceActual = 0;
    const imgElemento = document.getElementById("imagenAudifonos");

    if (!imgElemento) return;

    // 2. Función que hace la magia del cambio
    function cambiarImagen() {
        // --- CAMBIO AQUÍ: Usamos 'ocultar-fade' para que calce con el CSS anterior ---
        imgElemento.classList.add("ocultar-fade");

        // Esperamos 600ms (lo que dura la transición en el CSS) para cambiar la ruta
        setTimeout(() => {
            indiceActual = (indiceActual + 1) % imagenes.length;
            
            imgElemento.src = imagenes[indiceActual];

            // Volvemos a mostrar la imagen
            imgElemento.classList.remove("ocultar-fade");
        }, 600); 
    }

    // Ejecutar cada 5 segundos para que le dé tiempo de flotar y cambiar suavemente
    setInterval(cambiarImagen, 5000);
});