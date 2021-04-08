
const systemButtonNav = document.querySelector("#systemnav");

function toggleNav() {
    const subNav = document.querySelector("#subnav");
    subNav.classList.toggle("visible");
    console.log("chill")
}





systemButtonNav.addEventListener("mouseover", toggleNav);

