const introScreen = document.querySelector(".intro-screen");
const introVideo = document.getElementById("intro-video");
const scrollContainer = document.querySelector(".scrollable");

// Función para ocultar la pantalla de introducción
function hideIntro() {
    introScreen.classList.add("intro-hidden");
    // Remueve los eventos para que no interfieran después
    document.removeEventListener("click", hideIntro);
    document.removeEventListener("keydown", hideIntro);
}

// Detecta clic o cualquier tecla SOLO si la intro está activa
document.addEventListener("click", hideIntro);
document.addEventListener("keydown", hideIntro);

// Detecta el scroll del mouse y lo convierte en horizontal
scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY * 2; // Aumenta la velocidad del desplazamiento
});