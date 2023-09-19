import throttle from 'lodash.throttle';

const form = document.querySelector("form");
const mail = document.querySelector("input");
const textarea = document.querySelector("textarea");
const submit = document.querySelector("button")

const textBox = throttle(event => {
    if (event.target.nodeName === "INPUT") {
        mail.value = event.target.value
    }
    else {
        textarea.value = event.target.value
    }
    const userBox = {
        mail: mail.value,
        textarea: textarea.value
    };
    localStorage.setItem("feedback", JSON.stringify(userBox));
},500)

if (localStorage.feedback === undefined) {
    mail.value = ""
    textarea.value = ""
}
else {
    mail.value = JSON.parse(localStorage.feedback).mail
    textarea.value = JSON.parse(localStorage.feedback).textarea
}

const clearBox = (event) => {
    if (mail.value === undefined || textarea.value === undefined || mail.value === "" || textarea.value === "") {
        event.preventDefault();
        alert("Please, complete the application fields");
    }
    localStorage.clear();
    mail.value = "";
    textarea.value = "";
}

form.addEventListener("input", textBox)
submit.addEventListener("click", clearBox)