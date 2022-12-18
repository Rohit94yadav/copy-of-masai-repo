// All the Code for All Students Page Goes Here



let newdata = JSON.parse(localStorage.getItem("admission")) || [];

function adddata(admissiondatals){
    document.querySelector("tbody").innerHTML="";   
    admissiondatals.forEach(function(elem){
        
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerText=elem.name

        let td2 = document.createElement("td");
        td2.innerText=elem.gender

        let td3 = document.createElement("td");
        td3.innerText= elem.email

        let td4 = document.createElement("td");
        td4.innerText=elem.phone

        let td5 = document.createElement("td");
        td5.innerText= elem.course
        

        let td6 = document.createElement("td");
        td6.innerText = "ACCEPT"
        td6.style.backgroundColor="green"

        let td7 = document.createElement("td");
        td7.innerText = "REJECT"
        td7.style.backgroundColor="red"

        tr.append(td1,td2,td3,td4,td5,td6,td7);
        document.querySelector("tbody").append(tr);

    })
    
    
}


adddata(newdata);


let selected = document.querySelector("#filter")
selected.addEventListener("click",filtering);

function filtering(){
    
    let selected1=selected.value;
    let filteredlist=newdata;
    
    
    
    if(selected1!="all"){
        
        filteredlist = newdata.filter(function(elem){
        
        return elem.course == selected1;
    })
}

adddata(filteredlist);

}
