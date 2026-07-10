// =========================
// script.js
// =========================

// Initialize AOS
AOS.init({
    duration: 900,
    once: true,
    offset: 80
});

// Navbar background on scroll
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".custom-navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(8,17,31,.97)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
    } else {
        navbar.style.background = "rgba(8,17,31,.90)";
        navbar.style.boxShadow = "none";
    }

});

// Active nav link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            window.scrollTo({

                top: target.offsetTop - 70,

                behavior: "smooth"

            });

        }

    });

});

// Reveal stats
const stats = document.querySelectorAll(".stat-box");

stats.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {

        card.style.transition = ".6s";

        card.style.opacity = "1";

        card.style.transform = "translateY(0px)";

    }, 300 * index);

});

// Footer Year
const footer = document.querySelector(".footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Srikalyan Bhavanthi • Built with HTML, CSS & JavaScript`;

}