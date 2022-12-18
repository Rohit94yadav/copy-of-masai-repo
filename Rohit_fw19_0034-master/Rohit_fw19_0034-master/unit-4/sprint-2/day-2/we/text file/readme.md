1. Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.

2. The useState() is a Hook that allows you to have state variables in functional components . so basically useState is the ability to encapsulate local state in a functional component.

3. map(), filter() and reduce() work in the same way: They each accept a function and a sequence of elements and return the result of applying the received function to each element in the sequence. In the two examples above, we'd defined our functions using Python's def keyword.

4. function myarr(){
    this.length=0;
}

myarr.prototype.push = function(el){
    this[this.length]= el;
    this.length++
    return this.length
}

var arr = new myarr()

arr.push("masai")
