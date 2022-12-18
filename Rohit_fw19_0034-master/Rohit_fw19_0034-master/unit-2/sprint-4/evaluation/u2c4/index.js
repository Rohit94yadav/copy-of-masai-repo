// All the JS Code for the Add Students Page Goes Here
let form = document.querySelector("form");
form.addEventListener("submit",adddata);

function adddata(event){
let studentarr= JSON.parse(localStorage.getItem("admission")) || [];
    
    event.preventDefault()
    
    let studentobj={
        
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        phone: document.querySelector("#phone").value,
        gender: document.querySelector("#gender").value,
        course: document.querySelector("#course").value,
        
    }
    
    studentarr.push(studentobj);
    
    localStorage.setItem("admission",JSON.stringify(studentarr));
}

