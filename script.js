
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const stheme = localStorage.getItem('theme');
    if(stheme === 'dark') {
        toggleTheme();
    }
    
    const nav = document.querySelector(".topnav");
    let lastScrollY = window.scrollY;
    let currentY = 0;
    let baseHeight = -54;

    window.matchMedia("(orientation: portrait)").addEventListener("change", e => {
        const portrait = window.matchMedia("(orientation: portrait)").matches;
        
        currentY = 0;
        lastScrollY = window.scrollY;
        document.querySelector(".topnav").style.setProperty("top", currentY + "px");
    });

    window.addEventListener("scroll", () => {
        const portrait = window.matchMedia("(orientation: portrait)").matches;
        
        if(portrait === false)
            return;

        if(document.getElementById("mobile-items").classList.contains("active")) {
            currentY = 0;
            lastScrollY = window.scrollY;
            return;
        }

        currentY += (lastScrollY - window.scrollY) * 0.5;

        if (currentY < baseHeight)
            currentY = baseHeight;
        else if (currentY > 0)
            currentY = 0;
        

        lastScrollY = window.scrollY;

        document.querySelector(".topnav").style.setProperty("top", currentY + "px");
    });
});

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    
    let theme = document.getElementById('codeTheme');

    if(theme.getAttribute('href') == 'github-dark.css') {
        theme.setAttribute('href', 'github.css');
        document.getElementById('switch').innerHTML = '🌙';
        localStorage.setItem('theme', 'dark');
    }
    else {
        theme.setAttribute('href', 'github-dark.css');
        document.getElementById('switch').innerHTML = '☀️';
        localStorage.setItem('theme', 'light');
    }

}

function toggleMobileNav() {
    document.getElementById("mobile-items").classList.toggle("active");
    document.querySelector(".topnav").style.setProperty("top", "0px");
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}