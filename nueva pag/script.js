const video = document.getElementById("video");
const imageContainer = document.getElementById("image-container");

video.addEventListener("ended", () => {
    video.style.display = "none"; // Oculta el video
    imageContainer.style.display = "block"; // Muestra la imagen con el enlace
});