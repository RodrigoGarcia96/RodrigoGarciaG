document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("themeToggle");
    const body = document.body;

    if (!toggle) {
        console.error("No se encontró el botón con id='themeToggle'");
        return;
    }

    // Sincroniza el ícono inicial según el tema actual
    const initialTheme = body.getAttribute("data-theme") || "dark";
    body.setAttribute("data-theme", initialTheme);
    toggle.textContent = initialTheme === "dark" ? "🌞" : "🌙";

    toggle.addEventListener("click", () => {
        const isDark = body.getAttribute("data-theme") === "dark";
        const nextTheme = isDark ? "light" : "dark";

        body.setAttribute("data-theme", nextTheme);
        toggle.textContent = isDark ? "🌙" : "🌞";
    });
});