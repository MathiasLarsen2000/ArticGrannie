// js/script.js

// Simple script to set the current year in the footer
document.addEventListener('DOMContentLoaded', function() {
    const yearSpansIds = ['currentYear', 'currentYearPatterns', 'currentYearAbout', 'currentYearContact'];
    yearSpansIds.forEach(spanId => {
        const spanElement = document.getElementById(spanId);
        if (spanElement) {
            spanElement.textContent = new Date().getFullYear();
        }
    });

    // Active navigation link highlighting
    const navLinks = document.querySelectorAll('header nav ul li a');
    // Get the current page filename (e.g., "index.html", "patterns.html")
    // For root path on GitHub Pages, window.location.pathname might be "/reponame/" or "/reponame/index.html"
    // For local, it's the direct filename.
    let currentPath = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    if (currentPath === "" || currentPath === projectNameFromUrl()) { // If root or just reponame, consider it index.html
         currentPath = "index.html";
    }
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split("/").pop();
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});

// Helper function to get project name from GitHub Pages URL (for root path detection)
// This is a bit naive and might need adjustment based on actual deployment.
function projectNameFromUrl() {
    if (window.location.hostname.includes('github.io')) {
        // Example: https://username.github.io/projectname/ -> projectname
        const pathParts = window.location.pathname.split('/');
        if (pathParts.length > 1 && pathParts[1] !== "") {
            return pathParts[1];
        }
    }
    return "";
}

console.log("ArticGrannie scripts loaded!");
