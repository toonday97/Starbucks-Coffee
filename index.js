function toggleMenu() {
    var x = document.getElementById("navBar-child");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

const navEl = document.querySelector ('.navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY >= 56) {
            navEl.classList.add ('navbar-scrolled');
    } else if (window.scrollY < 56) {
        navEl.classList.remove ('navbar-scrolled');
    }
} )