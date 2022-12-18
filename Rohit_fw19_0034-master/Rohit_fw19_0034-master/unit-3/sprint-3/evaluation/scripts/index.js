
    let query = document.getElementById("query").value

async function getdata(){

    let url =  `https://masai-mock-api.herokuapp.com/hotels/search?city=${query.value}`;

    let res = await fetch(url);
    let data = await res.json();

    console.log(data)
}

getdata();