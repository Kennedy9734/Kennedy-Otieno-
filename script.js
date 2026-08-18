/* =========================================================
   KENNEDY OTIENO WEBSITE
   JAVASCRIPT
   ========================================================= */


/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const navLinks =
        document.getElementById("navLinks");

    if (!navLinks) return;

    navLinks.classList.toggle("active");

}


/* Close menu after clicking a link */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            const navLinks =
                document.getElementById("navLinks");

            if (navLinks) {

                navLinks.classList.remove("active");

            }

        });

    });



/* =========================
   PORTFOLIO LIGHTBOX
========================= */

const portfolioImages =
    document.querySelectorAll(
        ".portfolio-item img"
    );

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightbox-image");

const closeButton =
    document.querySelector(".lightbox-close");


/* Open image */

portfolioImages.forEach(image => {

    image.addEventListener("click", () => {

        if (!lightbox || !lightboxImage) return;

        lightboxImage.src = image.src;

        lightboxImage.alt =
            image.alt || "Portfolio Preview";

        lightbox.style.display = "flex";

        document.body.style.overflow = "hidden";

    });

});


/* Close lightbox */

function closeLightbox() {

    if (!lightbox) return;

    lightbox.style.display = "none";

    document.body.style.overflow = "";

}


/* Close button */

if (closeButton) {

    closeButton.addEventListener(
        "click",
        closeLightbox
    );

}


/* Close when clicking background */

if (lightbox) {

    lightbox.addEventListener(
        "click",
        event => {

            if (
                event.target === lightbox
            ) {

                closeLightbox();

            }

        }
    );

}


/* Close with ESC */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeLightbox();

        }

    }
);



/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".section-title, " +
        ".service-card, " +
        ".price-card, " +
        ".portfolio-item, " +
        ".testimonial-card, " +
        ".profile-card, " +
        ".skills-card, " +
        ".contact-box, " +
        ".contact-action"
    );


/* Check browser support */

if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add("show");

                            revealObserver
                                .unobserve(
                                    entry.target
                                );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        element => {

            element.classList.add(
                "reveal"
            );

            revealObserver.observe(
                element
            );

        }
    );

} else {

    revealElements.forEach(
        element => {

            element.classList.add(
                "show"
            );

        }
    );

}



/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";

        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop - 160;

                const sectionHeight =
                    section.offsetHeight;

                if (
                    window.scrollY >=
                        sectionTop &&
                    window.scrollY <
                        sectionTop +
                        sectionHeight
                ) {

                    currentSection =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navigationLinks.forEach(
            link => {

                link.classList.remove(
                    "active-link"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active-link"
                    );

                }

            }
        );

    }
);



/* =========================
   CLOSE MENU WITH ESC
========================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") return;

        const navLinks =
            document.getElementById(
                "navLinks"
            );

        if (navLinks) {

            navLinks.classList.remove(
                "active"
            );

        }

    }
);



/* =========================
   PREVENT BROKEN IMAGE
========================= */

document
    .querySelectorAll("img")
    .forEach(image => {

        image.addEventListener(
            "error",
            () => {

                console.warn(
                    "Image could not be loaded:",
                    image.src
                );

            }
        );

    });



/* =========================
   PAGE LOADED
========================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

        console.log(
            "Kennedy Otieno website loaded successfully."
        );

    }
);
