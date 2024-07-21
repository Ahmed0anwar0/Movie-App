import {row} from "./index.js";


export async function contact(){

  

}

let regx = {
    emailInput : /^(?=.{1,81}$)[\w\.-]+@[\w\.-]+\.\w{2,4}$/,
    phoneInput : /^\d{11}$/,
    nameInput : /([a-zA-Z0-9_\s]+)/,
    ageInput : /^(1[89]|[2-9]\d)$/ ,
    passwordInput : /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
}

