
let btn = document.getElementById("sign_up");

btn.addEventListener("click", savedata);

   function savedata  (e){

e.preventDefault();

let name = document.getElementById("name").value;

let email = document.getElementById("email").value

let password = document.getElementById("password").value


var data = {
    name : name,
    email : email,
    password : password
}

 
console.log(data)

localStorage.setItem("userdata",JSON.stringify(data));

alert("Singn UP SUCCESSFULL");

}