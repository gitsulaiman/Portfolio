/* =========================================================
   PORTFOLIO ENHANCEMENTS
   Obsidian Black | Chrome Silver | Laser Crimson Red
========================================================= */

(() => {
    "use strict";

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    const init = () => {

        /* Particle background dependency and markup are not used. */



        /* =====================================================
           MAIN PAGE SECTIONS
        ===================================================== */

        const sections = [
            ...document.querySelectorAll(
                "main section, body > section"
            )
        ].filter(section => !section.closest("header"));

        /* =====================================================
           SCROLL PROGRESS BAR
        ===================================================== */

        let progressBar = document.getElementById(
            "portfolio-scroll-progress"
        );

        if (!progressBar) {
            progressBar = document.createElement("div");

            progressBar.id = "portfolio-scroll-progress";

            progressBar.setAttribute(
                "aria-hidden",
                "true"
            );

            document.body.appendChild(progressBar);
        }

        const updateProgress = () => {
            const maxScroll =
                document.documentElement.scrollHeight -
                window.innerHeight;

            const progress = maxScroll > 0
                ? Math.min(
                    Math.max(window.scrollY / maxScroll, 0),
                    1
                )
                : 0;

            progressBar.style.transform =
                `scaleX(${progress})`;
        };

        /* =====================================================
           SECTION FOCUS / BLUR TRANSITION
        ===================================================== */

        const updateSectionFocus = () => {
            if (!sections.length) return;

            const viewportCenter =
                window.innerHeight * 0.52;

            let closestSection = null;
            let closestDistance = Infinity;

            sections.forEach(section => {
                const rect = section.getBoundingClientRect();

                const isVisible =
                    rect.bottom > 0 &&
                    rect.top < window.innerHeight;

                section.classList.remove(
                    "is-current-section",
                    "is-section-muted"
                );

                if (!isVisible) return;

                const center =
                    rect.top +
                    Math.min(rect.height, window.innerHeight) / 2;

                const distance = Math.abs(
                    center - viewportCenter
                );

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestSection = section;
                }
            });

            sections.forEach(section => {
                const rect = section.getBoundingClientRect();

                const isVisible =
                    rect.bottom > 0 &&
                    rect.top < window.innerHeight;

                if (section === closestSection) {
                    section.classList.add(
                        "is-current-section"
                    );
                } else if (isVisible) {
                    section.classList.add(
                        "is-section-muted"
                    );
                }
            });
        };

        /* =====================================================
           SCROLL REVEAL ANIMATIONS
        ===================================================== */

        const revealSelector = [
            ".section-title",
            ".about-text",
            ".about-cards",
            ".glass-card",
            ".skill-card",
            ".project-card",
            ".certificate-card",
            ".timeline-item",
            ".contact-form"
        ].join(",");

        const revealItems = [
            ...document.querySelectorAll(revealSelector)
        ];

        if (
            reduceMotion ||
            !("IntersectionObserver" in window)
        ) {
            revealItems.forEach(item => {
                item.classList.add(
                    "scroll-reveal",
                    "is-in-view"
                );
            });

        } else {

            const revealObserver = new IntersectionObserver(
                (entries, observer) => {
                    entries.forEach(entry => {
                        if (!entry.isIntersecting) return;

                        entry.target.classList.add(
                            "is-in-view"
                        );

                        observer.unobserve(entry.target);
                    });
                },
                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -35px 0px"
                }
            );

            revealItems.forEach((item, index) => {
                item.classList.add("scroll-reveal");

                item.style.transitionDelay =
                    `${(index % 5) * 55}ms`;

                revealObserver.observe(item);
            });
        }

        /* =====================================================
           ACETERNITY-INSPIRED GLOW CARDS
        ===================================================== */

        const cards = document.querySelectorAll(
            ".skill-card, .project-card, .glass-card, " +
            ".certificate-card, .timeline-item"
        );

        cards.forEach(card => {

            card.classList.add(
                "glow-card",
                "gradient-border"
            );

            if (reduceMotion) return;

            card.addEventListener(
                "pointermove",
                event => {
                    const rect = card.getBoundingClientRect();

                    const x =
                        ((event.clientX - rect.left) /
                            rect.width) * 100;

                    const y =
                        ((event.clientY - rect.top) /
                            rect.height) * 100;

                    card.style.setProperty(
                        "--glow-x",
                        `${x}%`
                    );

                    card.style.setProperty(
                        "--glow-y",
                        `${y}%`
                    );
                }
            );

            card.addEventListener(
                "pointerleave",
                () => {
                    card.style.setProperty(
                        "--glow-x",
                        "50%"
                    );

                    card.style.setProperty(
                        "--glow-y",
                        "50%"
                    );
                }
            );

        });

        /* =====================================================
           OPTIMIZED SCROLL AND RESIZE EVENTS
        ===================================================== */

        let framePending = false;

        const onScroll = () => {

            if (framePending) return;

            framePending = true;

            window.requestAnimationFrame(() => {

                updateProgress();

                if (!reduceMotion) {
                    updateSectionFocus();
                }

                framePending = false;
            });
        };

        window.addEventListener(
            "scroll",
            onScroll,
            { passive: true }
        );

        window.addEventListener(
            "resize",
            onScroll
        );

        /* =====================================================
           INITIALIZE
        ===================================================== */

        updateProgress();

        if (reduceMotion) {

            sections.forEach(section => {
                section.classList.add(
                    "is-current-section"
                );
            });

        } else {

            updateSectionFocus();
        }

    };

    /* =====================================================
       DOM READY
    ===================================================== */

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            init,
            { once: true }
        );

    } else {

        init();
    }

})();
