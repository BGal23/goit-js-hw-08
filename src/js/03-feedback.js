import throttle from 'lodash.throttle';

const form = document.querySelector("form");
const mail = document.querySelector("input");
const textarea = document.querySelector("textarea");
const submit = document.querySelector("button")

let userMail;
let userTextarea;
let date;

const textBox = throttle(event => {
    if (event.target.nodeName === "INPUT") {
        userMail = event.target.value
    }
    else {
        userTextarea = event.target.value
    }
    const userBox = {
        mail: userMail,
        textarea: userTextarea
    };
    localStorage.setItem("feedback", JSON.stringify(userBox));
    onload();
},500)

const onload = () => {
    JSON.parse(localStorage.feedback);
}

console.log(JSON.parse(localStorage.feedback))

const clearBox = (event) => {
    if (userMail === undefined || userTextarea === undefined || userMail === "" || userTextarea === "") {
        event.preventDefault();
        alert("Please, complete the application fields");
    }
    localStorage.clear();
    userMail = "";
    userTextarea = "";
}

form.addEventListener("input", textBox)
submit.addEventListener("click", clearBox)