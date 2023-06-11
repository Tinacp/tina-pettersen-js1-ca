const form = document.querySelector(".contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");
const message = document.querySelector(".message");


function validateForm(event) {
    event.preventDefault();

    if (checkLength(name.value, 0) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (checkLength(subject.value, 9) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(adress.value, 24) === true) {
        adressError.style.display = "none";
    } else {
        adressError.style.display = "block";
    }

    message.innerHTML = '<div class="message">Thank you, your message has been sent!</div>';
    form.reset();

}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const validatedEmail = regEx.test(email);
    return validatedEmail;
}