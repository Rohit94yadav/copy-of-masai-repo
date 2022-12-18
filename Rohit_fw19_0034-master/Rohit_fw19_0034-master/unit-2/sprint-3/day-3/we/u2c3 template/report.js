// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",myfunction);

function myfunction(event){
    event.preventDefault(event);

    var avatar= document.querySelector("#image").value;
    var name= document.querySelector("#name").value;
    var batch= document.querySelector("#batch").value;
    var dsa= document.querySelector("#dsa").value;
    var cs= document.querySelector("#cs").value;
    var coding= document.querySelector("#coding").value;
    
    var tr= document.createElement("tr")

    var td1= document.createElement("td");
    let pic=document.createElement("img");
    pic.setAttribute("src",avatar);
    td1.append(pic);

    var td2= document.createElement("td");
        td2.innerText= name;
    var td3= document.createElement("td");
        td3.innerText= batch;
    var td4= document.createElement("td");
        td4.innerText= dsa;
    var td5= document.createElement("td");
        td5.innerText= cs;
    var td6= document.createElement("td");
        td6.innerText= coding;
        
        var td7= document.createElement("td");
        
             var totalmarks= Number(dsa)+Number(cs)+Number(coding);
             var percentage = totalmarks*100/30;
         td7.innerText= percentage.toFixed(2);

     var td8= document.createElement("td");
         if(percentage>50){
             td8.innerText="Regular";
         }    
         else {
             td8.innerText="Async";
         }

     var td9= document.createElement("td");
            td9.innerText="Delete"
            td9.style.backgroundColor="red";
            td9.addEventListener("click",remove);
     tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);
         document.querySelector("tbody").append(tr);
}

function remove(event){
    event.target.parentNode.remove();
}