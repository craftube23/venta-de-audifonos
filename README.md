# 🎧 Audífonos Pro X - Landing Page & Detalle de Producto

¡Bienvenido al repositorio del proyecto **Audífonos Pro X**! Esta es una aplicación web interactiva y totalmente responsiva diseñada para ofrecer una experiencia visual premium y cinematográfica en la presentación de audífonos de alta gama.

El proyecto destaca por su fluidez en las transiciones, animaciones avanzadas tanto en CSS como en JavaScript, y un diseño adaptivo impecable para dispositivos móviles.

---

## ✨ Características Principales

* **Animación de Entrada Cinemática:** La tarjeta de presentación emerge desde la parte inferior y se engancha de forma fluida en un efecto de levitación infinito sin parpadeos.
* **Audio Inmersivo de Fondo:** Sistema de música ambiental integrado que se activa mediante la interacción del usuario con un efecto de entrada suave (*Fade-In*), cumpliendo con las políticas de privacidad de los navegadores modernos.
* **Efecto Vista de Detalle (Split-Screen):** En pantallas de escritorio, la imagen del producto permanece fija a la izquierda (`position: sticky`), mientras que las estadísticas y especificaciones se deslizan suavemente a la derecha.
* **Efecto Persiana en Móviles:** En dispositivos celulares, la sección de estadísticas pasa por encima de la imagen fija con un manejo de capas (`z-index`) y sombras muy elegante.
* **Carrusel Dinámico con Levitación:** En la sección de detalles, las imágenes de los audífonos cambian automáticamente con una transición de desvanecimiento (*Fade Out / Fade In*) gestionada por JavaScript, mientras mantienen un movimiento constante de flotación en CSS.
* **Diseño 100% Responsivo:** Adaptación ergonómica de botones, textos y contenedores para una experiencia móvil perfecta.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructuración semántica y limpia de las vistas de inicio y detalle.
* **CSS3:** Maquetación avanzada utilizando **CSS Grid** y **Flexbox**, animaciones con `@keyframes`, transformaciones de posición, filtros de desenfoque (`backdrop-filter`) y diseño adaptable mediante *Media Queries*.
* **JavaScript (Vanilla):** Lógica nativa para el control de eventos del ciclo de vida del DOM (`DOMContentLoaded`), manipulación dinámica de clases, temporizadores asíncronos (`setInterval` / `setTimeout`), encadenamiento de animaciones y manejo de la API de Audio del navegador con promesas.

---

## 📂 Estructura del Proyecto

```text
├── index.html          # Página de inicio con la animación de entrada
├── detalle.html        # Vista detallada del producto (Split-screen / Sticky)
├── script.js           # Lógica de animaciones, carrusel y audio Fade-In
├── styles.css          # Estilos generales, media queries y keyframes
└── asess/              # Carpeta de recursos del proyecto
    ├── img/            # Imágenes de los audífonos y el estuche
    └── audio/          # Archivo de música de fondo (.mp3)

---

## 🚀 Demostración en Vivo

El trabajo completamente terminado, con sus animaciones, efectos de audio y diseño responsivo, se puede ver y probar en línea aquí:

👉 **[Ver Proyecto en Vivo (Netlify)](https://venta-de-audifonos.netlify.app/)**
