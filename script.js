const container = document.querySelector(".container");

const joinOpt = document.querySelector(".navigation a:nth-child(3)");
const homeOpt = document.querySelector(".navigation a:nth-child(2)");
const logInOpt = document.querySelector(".contact p a");
const contactOpt = document.querySelector(".contact-btn:nth-child(2)");



joinOpt.addEventListener("click", ()=> {
    container.classList.add("replace");
});

homeOpt.addEventListener("click", ()=> {
    container.classList.remove("replace");
});

logInOpt.addEventListener("click", ()=> {
    container.classList.toggle("hide") ? 
    (logInOpt.textContent="Sign Up" ) && (contactOpt.textContent ="Log In" ):
    (logInOpt.textContent="Log In" ) && (contactOpt.textContent= "Create Account");
});