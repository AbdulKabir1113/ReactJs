//! Object Shallow Copy

let car = {
    brand : "BMW",
    color : "White",
    price : 900000,
    features : ["automatic","CNG"]
}
console.log(car);

let car1= {...car} // shallow copy
console.log(car1);

car.brand = "Audi"
console.log(car);

car.features[0]="Manual"
console.log(car);
console.log(car1);

car1.color="Black"
console.log(car1);
console.log(car);

car1.features[1]="Petrol"
console.log(car1);
console.log(car);

//! Array Shallow Copy

let products = ["BMW",900000,"Red",["CNG","Automatic"]]
console.log(products);

let products1=[...products]
console.log(products1);

products[0] = "Ferrari"
console.log(products[0]); // Ferrari
console.log(products1[0]); // BMW

products[3][0] = "petrol"
console.log(products[3][0]); // petrol
console.log(products1[3][0]); // petrol


// Deep Copy

let person = {
    pname : "Kabir",
    Occupation : "Developer",
    Achievments : ["85 Centuries","No in coding"]
}

let p1 = JSON.parse(JSON.stringify(person))
console.log(p1);
person.pname = "Maaz"
console.log(person.pname);
console.log(p1.pname);

person.Achievments[0] = "67 Centuries"
console.log(person.Achievments[0]);
console.log(p1.Achievments[0]);