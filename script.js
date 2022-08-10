const form = document.getElementById("form");
const emailAddress = document.querySelector(".email");
const email = document.getElementById("email");
const text = document.getElementById("text");
const submit = document.getElementById("submit");

let emailFormat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

submit.addEventListener("click", () => {
    if (email.value.match(emailFormat)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please provide a valid email address";
        text.style.padding = "0 0 1.5em 0";
        email.style.border = "1px solid var(--light-red)";
    }
});