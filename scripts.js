let inputs = document.querySelectorAll("input");
inputs.forEach(element => {
    element.addEventListener("focusout", () => {
        let invalidInput = document.querySelectorAll("input:not(:placeholder-shown):invalid");
        invalidInput.forEach(element => {
            element.parentNode.querySelector(".errorMsg").hidden = false;
        });
    })
});
inputs.forEach(element => {
    element.addEventListener("input", () => {
        let validInput = document.querySelectorAll("input:valid");
        validInput.forEach(element => {
            element.parentNode.querySelector(".errorMsg").hidden = true;
        });
    })
});

let isValidForm = false;
let password = document.querySelector("#pwd");
let repeatPwd = document.querySelector("#repeatPwd");
let submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", () => {
    if (password.value != repeatPwd.value) {
        isValidForm = false;
        password.parentNode.querySelector(".errorMsg").textContent = "Passwords must match!";
        password.parentNode.querySelector(".errorMsg").hidden = false;
        repeatPwd.parentNode.querySelector(".errorMsg").textContent = "Passwords must match!";
        repeatPwd.parentNode.querySelector(".errorMsg").hidden = false;
    }
    else{
        isValidForm = true;
        password.parentNode.querySelector(".errorMsg").hidden = true;
        password.parentNode.querySelector(".errorMsg").hidden = true;
    }
})