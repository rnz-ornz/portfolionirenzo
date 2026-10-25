
// ================================
// 1. HAMBURGER MENU
// ================================
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const menuIcon = menuToggle
    ? menuToggle.querySelector("i")
    : null;

function closeMenu() {
    if (!menuToggle || !mainNav) return;

    mainNav.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");

    if (menuIcon) {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }
}

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        if (menuIcon) {
            menuIcon.classList.toggle("fa-bars", !isOpen);
            menuIcon.classList.toggle("fa-xmark", isOpen);
        }
    });

    // Close the menu after selecting a navigation link
    mainNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    // Close menu when clicking outside the header
    document.addEventListener("click", event => {
        if (
            mainNav.classList.contains("open") &&
            !event.target.closest("header")
        ) {
            closeMenu();
        }
    });

    // Close menu with Escape
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeMenu();
            menuToggle.focus();
        }
    });

    // Close mobile menu when switching to desktop width
    window.addEventListener("resize", () => {
        if (window.innerWidth > 700) {
            closeMenu();
        }
    });
}

// ================================
// 2. BACK TO TOP BUTTON
// ================================
const backToTopBtn = document.getElementById("backToTop");

function updateBackToTop() {
    if (backToTopBtn) {
        backToTopBtn.style.display =
            window.scrollY > 300 ? "flex" : "none";
    }
}

window.addEventListener("scroll", updateBackToTop, {
    passive: true
});

updateBackToTop();

if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ================================
// 3. ACTIVE NAVIGATION LINK
// ================================
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll("#mainNav a");

function updateActiveNav() {
    let current = "";

    sections.forEach(section => {
        const sectionTop =
            section.getBoundingClientRect().top + window.scrollY;

        if (window.scrollY >= sectionTop - 150) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        const isActive =
            link.getAttribute("href") === `#${current}`;

        link.classList.toggle("active", isActive);

        if (isActive) {
            link.setAttribute("aria-current", "location");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

window.addEventListener("scroll", updateActiveNav, {
    passive: true
});

window.addEventListener("load", updateActiveNav);

// ================================
// 4. CARD REVEAL ANIMATION
// ================================
const cards = document.querySelectorAll(".card");

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if ("IntersectionObserver" in window && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    cards.forEach(card => {
        card.classList.add("reveal");

        revealObserver.observe(card);
    });
}

// ================================
// 5. TYPING EFFECT
// ================================
const heroHeading = document.querySelector(".hero-text h1");

if (heroHeading && !prefersReducedMotion) {
    const originalText = heroHeading.textContent.trim();

    heroHeading.textContent = "";

    let index = 0;

    function typeWriter() {
        if (index < originalText.length) {
            heroHeading.textContent += originalText.charAt(index);
            index++;

            setTimeout(typeWriter, 70);
        }
    }

    if (document.readyState === "complete") {
        typeWriter();
    } else {
        window.addEventListener("load", typeWriter, {
            once: true
        });
    }
}

// ================================
// 6. AUTOMATIC FOOTER YEAR
// ================================
const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.innerHTML = footerText.innerHTML.replace(
        /\b\d{4}\b/,
        new Date().getFullYear()
    );
}
