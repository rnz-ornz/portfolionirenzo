
// ================================
// 1. BACK TO TOP BUTTON
// ================================
const backToTopBtn = document.getElementById("backToTop");

function updateBackToTop() {
    if (backToTopBtn) {
        backToTopBtn.style.display =
            window.scrollY > 300 ? "block" : "none";
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
// 2. ACTIVE NAVIGATION LINK
// ================================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll('nav a[href^="#"]');

function updateActiveNav() {
    let current = "";

    sections.forEach(section => {
        const sectionTop =
            section.getBoundingClientRect().top + window.scrollY;

        if (window.scrollY >= sectionTop - 180) {
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
// 3. CARD REVEAL ANIMATION
// ================================
const cards = document.querySelectorAll(".card");

if ("IntersectionObserver" in window) {
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
        card.style.opacity = "0";
        card.style.transform = "translateY(25px)";
        card.style.transition =
            "opacity 0.5s ease, transform 0.5s ease";

        revealObserver.observe(card);
    });

    const revealStyle = document.createElement("style");
    revealStyle.textContent = `
        .card.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;

    document.head.appendChild(revealStyle);
}

// ================================
// 4. TYPING EFFECT
// ================================
const heroHeading = document.querySelector(".hero-text h1");

if (heroHeading) {
    const originalText = heroHeading.textContent.trim();

    if (!window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches) {
        heroHeading.textContent = "";

        let index = 0;

        function typeWriter() {
            if (index < originalText.length) {
                heroHeading.textContent += originalText.charAt(index);
                index++;

                setTimeout(typeWriter, 70);
            }
        }

        window.addEventListener("load", typeWriter, {
            once: true
        });
    }
}

// ================================
// 5. AUTOMATIC FOOTER YEAR
// ================================
const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.innerHTML = footerText.innerHTML.replace(
        /\b\d{4}\b/,
        new Date().getFullYear()
    );
}
