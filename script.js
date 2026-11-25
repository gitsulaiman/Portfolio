/* =========================================================
   PORTFOLIO INTERACTIONS
   Theme: Obsidian Black | Chrome Silver | Laser Crimson Red
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");
    const menuIcon = menuBtn?.querySelector("i");

    const closeMenu = () => {
        navbar?.classList.remove("active");
        menuBtn?.setAttribute("aria-expanded", "false");

        if (menuIcon) {
            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");
        }
    };

    if (menuBtn && navbar && menuIcon) {
        menuBtn.setAttribute("role", "button");
        menuBtn.setAttribute("tabindex", "0");
        menuBtn.setAttribute("aria-label", "Toggle navigation");
        menuBtn.setAttribute("aria-expanded", "false");

        const toggleMenu = () => {
            const isOpen = navbar.classList.toggle("active");

            menuBtn.setAttribute("aria-expanded", String(isOpen));

            menuIcon.classList.toggle("fa-bars", !isOpen);
            menuIcon.classList.toggle("fa-xmark", isOpen);
        };

        menuBtn.addEventListener("click", toggleMenu);

        menuBtn.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleMenu();
            }
        });

        navbar.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("click", event => {
            if (
                !navbar.contains(event.target) &&
                !menuBtn.contains(event.target)
            ) {
                closeMenu();
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 850) {
                closeMenu();
            }
        });
    }

    /* =====================================================
       TYPED HEADLINE ANIMATION
    ===================================================== */

    const typingElement = document.querySelector(".typing");

    if (
        typingElement &&
        typeof Typed !== "undefined" &&
        !reduceMotion
    ) {
        new Typed(".typing", {
            strings: [
                "AI Developer",
                "Software Developer",
                "Python Programmer",
                "Web Developer",
                "Machine Learning Enthusiast"
            ],
            typeSpeed: 65,
            backSpeed: 38,
            backDelay: 1300,
            loop: true,
            smartBackspace: true
        });
    } else if (typingElement && reduceMotion) {
        typingElement.textContent = "AI & Software Developer";
    }

    /* =====================================================
       AOS ANIMATION
    ===================================================== */

    if (typeof AOS !== "undefined" && !reduceMotion) {
        AOS.init({
            duration: 850,
            once: true,
            offset: 80,
            easing: "ease-out-cubic"
        });
    }

    /* =====================================================
       HEADER AND ACTIVE NAVIGATION
    ===================================================== */

    const header = document.querySelector(".header");

    const navLinks = [
        ...document.querySelectorAll(".navbar a[href^='#']")
    ];

    const sections = [
        ...document.querySelectorAll(
            "main section[id], body > section[id]"
        )
    ];

    const updateHeader = () => {
        header?.classList.toggle(
            "scrolled",
            window.scrollY > 35
        );
    };

    updateHeader();

    window.addEventListener("scroll", updateHeader, {
        passive: true
    });

    if (
        "IntersectionObserver" in window &&
        navLinks.length &&
        sections.length
    ) {
        const sectionObserver = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;

                    const currentId = `#${entry.target.id}`;

                    navLinks.forEach(link => {
                        const active =
                            link.getAttribute("href") === currentId;

                        link.classList.toggle("active", active);

                        if (active) {
                            link.setAttribute("aria-current", "page");
                        } else {
                            link.removeAttribute("aria-current");
                        }
                    });
                });
            },
            {
                rootMargin: "-25% 0px -60% 0px"
            }
        );

        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }

    /* =====================================================
       PROJECT CAROUSEL
    ===================================================== */

    const projectTrack =
        document.querySelector(".projects-container");

    const prevButton =
        document.querySelector(".slider-prev");

    const nextButton =
        document.querySelector(".slider-next");

    if (projectTrack && prevButton && nextButton) {
        projectTrack.setAttribute("tabindex", "0");

        projectTrack.setAttribute(
            "aria-label",
            "Project cards. Use arrow keys to scroll."
        );

        const slideDistance = () => {
            const card = projectTrack.querySelector(".project-card");

            if (!card) return projectTrack.clientWidth * 0.8;

            const styles = window.getComputedStyle(projectTrack);
            const gap = parseFloat(styles.columnGap || styles.gap) || 0;

            return card.getBoundingClientRect().width + gap;
        };

        const updateSliderButtons = () => {
            const maxScroll =
                projectTrack.scrollWidth - projectTrack.clientWidth;

            prevButton.disabled = projectTrack.scrollLeft <= 2;

            nextButton.disabled =
                projectTrack.scrollLeft >= maxScroll - 2;
        };

        prevButton.addEventListener("click", () => {
            projectTrack.scrollBy({
                left: -slideDistance(),
                behavior: reduceMotion ? "auto" : "smooth"
            });
        });

        nextButton.addEventListener("click", () => {
            projectTrack.scrollBy({
                left: slideDistance(),
                behavior: reduceMotion ? "auto" : "smooth"
            });
        });

        projectTrack.addEventListener(
            "scroll",
            updateSliderButtons,
            { passive: true }
        );

        projectTrack.addEventListener("keydown", event => {
            if (event.key === "ArrowRight") {
                event.preventDefault();

                projectTrack.scrollBy({
                    left: slideDistance(),
                    behavior: reduceMotion ? "auto" : "smooth"
                });
            }

            if (event.key === "ArrowLeft") {
                event.preventDefault();

                projectTrack.scrollBy({
                    left: -slideDistance(),
                    behavior: reduceMotion ? "auto" : "smooth"
                });
            }
        });

        window.addEventListener("resize", updateSliderButtons);

        updateSliderButtons();
    }

    /* No achievement counter markup exists on this page. */

    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const contactForm =
        document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", event => {
            event.preventDefault();

            if (!contactForm.reportValidity()) return;

            const formData = new FormData(contactForm);

            const name = String(
                formData.get("name") || ""
            ).trim();

            const email = String(
                formData.get("email") || ""
            ).trim();

            const message = String(
                formData.get("message") || ""
            ).trim();

            const subject = encodeURIComponent(
                `Portfolio contact from ${name}`
            );

            const body = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\n${message}`
            );

            window.location.href =
                `mailto:er.suleman.khan@gmail.com?subject=${subject}&body=${body}`;
        });
    }

    /* =====================================================
       FOOTER YEAR
    ===================================================== */

    const copyright =
        document.querySelector(".copyright");

    if (copyright) {
        copyright.textContent =
            `© ${new Date().getFullYear()} All Rights Reserved`;
    }

});
