document.addEventListener("DOMContentLoaded", () => {

    const caja = document.getElementById("cajaAudifonos");
    caja.classList.add("animacion-inicio");

    const audioInicio = document.getElementById("audioInicio");
    const musicaF = document.getElementById("musicaFondo");
    const boton = document.querySelector(".btn-interes");

    // SONIDO AL ENTRAR O RECARGAR
    if (audioInicio) {

        audioInicio.volume = 0.3;

        const iniciarAudio = () => {

            audioInicio.play()
                .then(() => {
                    console.log("Audio iniciado");
                })
                .catch(error => {
                    console.log("Autoplay bloqueado:", error);
                });

            // Quita el evento después de usarlo
            document.removeEventListener("click", iniciarAudio);
        };

        // Espera el primer clic del usuario
        document.addEventListener("click", iniciarAudio);
    }

    // SONIDO DEL BOTÓN
    if (musicaF && boton) {

        boton.addEventListener("click", (e) => {

            e.preventDefault();

            musicaF.volume = 0.3;

            musicaF.play();

            setTimeout(() => {
                window.location.href = boton.href;
            }, 4000);

        });
    }

});