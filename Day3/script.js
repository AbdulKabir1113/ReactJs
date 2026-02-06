
let name1 = "maaz"
let emp = {
    name1 : "Kabir",
    empDetails : function (){
        console.log(this);
        console.log(name1); 
        console.log(this.name1);    
    }
}

console.log(emp.empDetails());


// var allow dublicates
// var is global and function scope 
// let and const have global, function and block scope

// block scope are if,else,switch,do,while,{}

