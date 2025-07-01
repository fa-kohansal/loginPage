const showPass= document.querySelector("#showPass")
const hidePass=document.querySelector("#hidePass")
let passwordInput =document.querySelector("#password")
showPass.addEventListener("click",function(){
    if(passwordInput.type === "password"){
        passwordInput.type = "text";
        showPass.classList.remove("d-block");
        showPass.classList.add("d-none");
        hidePass.classList.remove("d-none");
        hidePass.classList.add("d-block");
    }
})
hidePass.addEventListener("click", function(){
    if(passwordInput.type === "text"){
        passwordInput.type ="password"

        hidePass.classList.remove("d-block");
        hidePass.classList.add("d-none");
        showPass.classList.remove("d-none");
        showPass.classList.add("d-block");

    }
})