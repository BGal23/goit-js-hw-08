import throttle from 'lodash.throttle';

const form = document.querySelector("form");
const mail = document.querySelector("input");
const textarea = document.querySelector("textarea");
const submit = document.querySelector("button")

const textBox = throttle(event => {
    if (event.target.nodeName === "INPUT") {
        localStorage.setItem("feedbackMail", event.target.value)
    }
    else {
        localStorage.setItem("feedbackTextarea", event.target.value)
    }
},500)

if (localStorage.feedbackMail === undefined) {
    mail.value = "";
}
else {
    mail.value = localStorage.feedbackMail;
}

if (localStorage.feedbackTextarea === undefined) {
    textarea.value = "";
}
else {
    textarea.value = localStorage.feedbackTextarea;
}

const clearBox = () => {
    localStorage.clear();
    mail.value = "";
    textarea.value = "";
}

form.addEventListener("input", textBox)
submit.addEventListener("click", clearBox)