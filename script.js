/*DARK / LIGHT MODE TOGGL*/

function toggleTheme() {
    document.body.classList.toggle("light-mode");

    // Save theme preference
    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
}

/*LOAD SAVED THEME*/

window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }

    revealOnScroll();
});

/* Run reveal animation on scroll */
window.addEventListener("scroll", revealOnScroll);
    function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", revealOnScroll);
