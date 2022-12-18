
let btn = document.getElementById("sign_up");

btn.addEventListener("click",logmein);

function logmein(e){

    e.preventDefault();

    var data = localStorage.getItem("userdata");

    data = JSON.parse(data);


    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email === data.email && password === data.password){

        alert(`Logged in succesfull ${data.name}`);
    }
}