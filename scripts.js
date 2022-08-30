function showErrorMsg(element){
    element.parentNode.querySelector(".errorMsg").hidden = false;
    element.parentNode.querySelector(".errorMsg").classList.remove("opacity-0");
    element.parentNode.querySelector(".errorMsg").classList.add("opacity-1");
};
function hideErrorMsg(element){
    element.parentNode.querySelector(".errorMsg").hidden = true;
    element.parentNode.querySelector(".errorMsg").classList.remove("opacity-1");
    element.parentNode.querySelector(".errorMsg").classList.add("opacity-0")
}

let inputs = document.querySelectorAll("input");
inputs.forEach(element => {
    element.addEventListener("focusout", () => {
        let invalidInput = document.querySelectorAll("input:not(:placeholder-shown):invalid");
        invalidInput.forEach(element => {
            showErrorMsg(element);
        });
    })
});
inputs.forEach(element => {
    element.addEventListener("input", () => {
        let validInput = document.querySelectorAll("input:valid");
        validInput.forEach(element => {
            hideErrorMsg(element);
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
        showErrorMsg(password);
        repeatPwd.parentNode.querySelector(".errorMsg").textContent = "Passwords must match!";
        showErrorMsg(repeatPwd);
    }
    else{
        isValidForm = true;
        hideErrorMsg(password);
        hideErrorMsg(repeatPwd);
    }
})