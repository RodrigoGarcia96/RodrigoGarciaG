const toggle = document.getElementById("themeToggle");
const body = document.body;

toggle.addEventListener("click", () => {
    const isDark = body.getAttribute("data-theme") === "dark";
    body.setAttribute("data-theme", isDark ? "light" : "dark");
    toggle.textContent = isDark ? "🌙" : "🌞";
});