let invalidInput = document.querySelectorAll("input:not(:placeholder-shown):invalid");
let errorImg = document.createElement("img");
    errorImg.src = "./images/alert-triangle.svg";
    errorImg.style = "width: 1rem; height: 1rem;";
let errorMsg = document.createElement("span");
    errorMsg.style = "color: red, font-size: 0.8rem; padding-top: 5px;"
    errorMsg.appendChild(errorImg);

invalidInput.forEach(element => {
    switch(element.name){
        case "firstName":
            errorMsg.innerText = "Please, enter a valid name";
            element.parentNode.appendChild(errorMsg);
            break;
        case "lastName":
            errorMsg.innerText = "Please, enter a valid surname";
            element.parentNode.appendChild(errorMsg);
            break;
        case "email":
            errorMsg.innerText = "Please, enter a valid email address";
            element.parentNode.appendChild(errorMsg);
            break;
        case "phoneNumber":
            errorMsg.innerText = "Please, enter a valid phone number";
            element.parentNode.appendChild(errorMsg);
            break;
        case "password":
            let list = document.createElement("ul");
            list.innerText = "Your password must contain";
            let listItem_1 = document.createElement("li");
            listItem_1.innerText = "Minimum of 8 characters";
            list.appendChild(listItem_1);
            let listItem_2 = document.createElement("li");
            listItem_1.innerText = "At least one number";
            list.appendChild(listItem_2);
            let listItem_3 = document.createElement("li");
            listItem_1.innerText = "At least one Uppercase character";
            list.appendChild(listItem_3);
            let listItem_4 = document.createElement("li");
            listItem_1.innerText = "At least one Lowercase character";
            list.appendChild(listItem_4);
            element.parentNode.appendChild(list);
            break;
        default:
            break;
    }
});