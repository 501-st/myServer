let form = document.querySelector(".form")
let name = document.getElementById("name")
let email = document.getElementById("email")
let number = document.getElementById("number")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let formData = {
        name: name.value,
        email: email.value,
        number: number.value
    }
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/")
    xhr.setRequestHeader("content-type", "application/json")
    xhr.send(JSON.stringify(formData));
})