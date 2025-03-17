const scrollContainer = document.querySelector(".scrollable");

let isDown = false;
let startX;
let scrollLeft;

// Detecta el scroll del mouse y lo convierte en horizontal
scrollContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  scrollContainer.scrollLeft += event.deltaY * 2; // Aumenta la velocidad del desplazamiento
});