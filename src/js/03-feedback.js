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

const onLoad = () => {
    const userBox = {
        email: mail.value,
        message: textarea.value
    };
    console.log(userBox)
}

const clearBox = (event) => {
    event.preventDefault();
    if (!mail.value || !textarea.value) {
        alert("Please, complete the application fields");
    }
    else {
    
    onLoad()
    
    localStorage.clear();
    mail.value = "";
    textarea.value = "";
    }
return
}

form.addEventListener("input", textBox)
submit.addEventListener("click", clearBox)