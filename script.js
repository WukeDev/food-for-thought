// Get the navbar element
const navbar = document.getElementById("navbar");

// Function to handle the sticky effect
function stickNavbar() {
    if (window.pageYOffset >= navbar.offsetTop) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// Listen for the "scroll" event and call the stickNavbar function
window.addEventListener("scroll", stickNavbar);

console.log('hi');