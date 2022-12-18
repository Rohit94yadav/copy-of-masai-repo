// fill in javascript code here
document.querySelector("form").addEventListener("submit",myfunction);

function myfunction(event){
    event.preventDefault()
    var name= document.querySelector("#name").value

    var employeeid= document.querySelector("#employeeID").value

    var department = document.querySelector("#department").value

    var experience = document.querySelector("#exp").value

    var email = document.querySelector("#email").value

    var mobile = document.querySelector("#mbl").value

    var tr= document.createElement("tr");

    var td1= document.createElement("td1")
        td1.innerText = name;

        var td2= document.createElement("td2")
        td2.innerText = employeeid;

        var td3= document.createElement("td3")
        td3.innerText = department;

        var td4= document.createElement("td4")
        td4.innerText = experience;

        var td5= document.createElement("td4")
        td5.innerText = email;

        var td6= document.createElement("td6")
        td6.innerText = mobile;

        var td7= document.createElement("td7")
        if(experience > 5 ){

            td7.innerText = "Senior";
        }else if(experience > 2 && experience <= 5 ){
            td7.innerText = "Junior";
        }else{
            td7.innerText = "Fresher";
            td7.style.padding="35px"
            td7.style.fontSize="20px"
            td7.style.border="1px solid black"
        }
        td7.style.border="1 px solid black";
        var td8= document.createElement("td8")
        td8.innerText="DELETE";
        td8.style.backgroundColor="red";
        td8.style.hover="pointer"
        td8.style.padding="10px";
        td8.style.margin ="0px 0px 0px 20px"
        td8.style.justifyContent="center"
        td8.style.alignItems="center"
        td8.addEventListener("click",addremove);
        

        tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
        document.querySelector("tbody").append(tr);

       


}
function addremove(event){
    event.target.parentNode.remove();
    
}