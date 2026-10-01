lucide.createIcons();

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});


document.querySelectorAll("#mobileMenu a").forEach(link => {

    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });

});


const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.documentElement.classList.toggle("dark");

    const isDark =
        document.documentElement.classList.contains("dark");

    localStorage.setItem("darkMode", isDark);

});


if (localStorage.getItem("darkMode") === "true") {
    document.documentElement.classList.add("dark");
}


const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    formMessage.classList.remove("hidden");

    contactForm.reset();

    setTimeout(() => {
        formMessage.classList.add("hidden");
    }, 3000);

});


// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        event.preventDefault();

        const target =
            document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});