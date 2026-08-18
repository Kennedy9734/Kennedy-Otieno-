function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");
}


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("navLinks")
            .classList.remove("active");

    });

});
// PORTFOLIO IMAGE LIGHTBOX

const portfolioImages = document.querySelectorAll(".portfolio-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightbox-image");

const closeButton = document.querySelector(".lightbox-close");


portfolioImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = image.src;

    });

});


closeButton.addEventListener("click", () => {

    lightbox.style.display = "none";

});


lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        lightbox.style.display = "none";

    }

});


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        lightbox.style.display = "none";

    }

});