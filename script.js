// CARDS VARIABLES:
const aboutBtn = document.getElementById("about-btn");
const webDevBtn = document.getElementById("web-dev-btn");
const engBtn = document.getElementById("eng-btn");
const contactBtn = document.getElementById("contact-btn");

const about = document.getElementById("about");
const webDev = document.getElementById("web-dev");
const eng = document.getElementById("eng");
const contact = document.getElementById("contact");

// CARDS EVENTS:
aboutBtn.addEventListener("click", displayAbout);
webDevBtn.addEventListener("click", displayWebDev);
engBtn.addEventListener("click", displayEng);
contactBtn.addEventListener("click", displayContact);

// CARDS FUNCTIONS:
function displayAbout(){
    about.style.display = "block";
    webDev.style.display = "none";
    eng.style.display = "none";
    contact.style.display = "none";
}

function displayWebDev() {
    about.style.display = "none";
    webDev.style.display = "block";
    eng.style.display = "none";
    contact.style.display = "none";
}

function displayEng() {
    about.style.display = "none";
    webDev.style.display = "none";
    eng.style.display = "block";
    contact.style.display = "none";
}

function displayContact() {
    about.style.display = "none";
    webDev.style.display = "none";
    eng.style.display = "none";
    contact.style.display = "block";
}