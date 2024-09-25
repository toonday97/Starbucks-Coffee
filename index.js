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

// Sign In Form

const signInContainer = document.querySelector('#signInPage');

// Example toggle function to hide the form
function toggleSignInForm() {
    signInContainer.style.display = (signInContainer.style.display === 'none') ? 'block' : 'none';
}

// Back To Top

function scrollToTop () {
    window.scrollTo ({ top: 0,
        behavior: "smooth"
    });
};

window.onscroll = function() {

    let button = document.getElementById("backToTop");
    
    if (document.body.scrollTop >= 50 ) {
            button.style.display = "block"; 
        }  else if  (document.documentElement.scrollToTop > 50 ) {
                button.style.display = "none";
            }
    };