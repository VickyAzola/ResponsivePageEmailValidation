const errorMessage = document.getElementById("errorMessage");
const emailForm = document.getElementById("emailForm")
const iconoError = document.getElementById("iconoError")
const email = document.getElementById("email")

let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;      


function validForm(event) {
    let form = document.forms["submit"]["email"].value;
    if (form == "" || !form.match(emailFormat)) {
        errorMessage.classList.remove("invisible")
        emailForm.style.borderColor= "#f96262"
        iconoError.classList.remove("hidden")
        iconoError.style.display = "block"
        return false;
    } else {
        errorMessage.classList.add("invisible")
        emailForm.style.borderColor= "#ce9797"
        iconoError.classList.remove("block")
        iconoError.style.display = "none"
        alert("Thank you for subscribing! " + email.value);
        email.value = ""
        event.preventDefault()
    }
}

email.addEventListener("click", () => {
    iconoError.style.display = "none"
    errorMessage.classList.add("invisible")
    emailForm.style.border = '0.5px solid hsl(0, 36%, 70%)'
})
