document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a, .hero-content .btn");
    const pages = document.querySelectorAll(".page");

    function handleRoute() {
        // Grab current hash value from the URL, fall back to #home if blank
        let currentHash = window.location.hash || "#home";

        // Deactivate all sections & highlight markers
        pages.forEach(page => page.classList.remove("active"));
        document.querySelectorAll(".nav-links a").forEach(link => link.classList.remove("active"));

        // Activate matching section
        const activeTargetPage = document.querySelector(currentHash);
        if (activeTargetPage) {
            activeTargetPage.classList.add("active");
            // Automatically scroll window back to top on transitions
            window.scrollTo(0, 0);
        }

        // Active state indicator switch for main navigation menu
        const activeNavLink = document.querySelector(`.nav-links a[href="${currentHash}"]`);
        if (activeNavLink) {
            activeNavLink.classList.add("active");
        }
    }

    // Bind navigation trigger hooks
    window.addEventListener("hashchange", handleRoute);
    
    // Initial load route evaluation
    handleRoute();
});
