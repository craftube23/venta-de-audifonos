document.addEventListener("DOMContentLoaded", () => {
    const imagenes = [
        "/asess/img/audifonos.png",
        "/asess/img/airpods-pro-2.png",
    ];
    
    let indiceActual = 0;
    const imgElemento = document.getElementById("imagenAudifonos");

    if (!imgElemento) return;


    function cambiarImagen() {
        imgElemento.classList.add("ocultar-fade");

        // Esperamos 600ms  para cambiar la ruta
        setTimeout(() => {
            indiceActual = (indiceActual + 1) % imagenes.length;
            
            imgElemento.src = imagenes[indiceActual];

            imgElemento.classList.remove("ocultar-fade");
        }, 600); 
    }

    // Ejecutar cada 5 segundos para que le dé tiempo de flotar y cambiar suavemente
    setInterval(cambiarImagen, 5000);
});