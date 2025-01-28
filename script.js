function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
    console.log("Menu toggled. Current state:", menu.classList.contains("open") ? "Open" : "Closed");
}

// Function to toggle theme between light and dark
function toggleTheme() {
    const isDarkTheme = document.body.classList.toggle("dark-theme");

    // Save the user's preference in localStorage
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");

    console.log("Theme toggled. Current theme:", isDarkTheme ? "Dark" : "Light");
}

// Check the user's theme preference when the page loads
document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }
});
