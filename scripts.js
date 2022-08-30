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