// Array Destructuring

// let arr = [10,20,30]

// let [x,y,z] = arr;
// let [, ,z] = arr;

// console.log(x);

// object Destructuring

// let person = {
//     name : 'Kabir',
//     id : 101,
//     sal : 300000
// }

// let {name,id,sal} = person
// let {id,sal} = person


// Aliaz Name
// let {name:empName, id:empId, sal:empSal} = person

// console.log(sal); // not giving value
// console.log(empSal); // 300000


// let students = [{id:101,name:'Rehan',gender:'Male',course:'JFS'},
//                 {id:101,name:'Maaz',gender:'Male',course:'PFS'},
//                 {id:101,name:'Zubair',gender:'Male',course:'JFS'}
// ]

// students.map((obj)=>{
//     let {name} = obj
//     console.log(name);
    
// })

// students.map(({name,id})=>{

//     console.log(name,id);
    
// })


// in Function Destructuring the object
function fullDetails({name,area,pincode}){
    console.log(` Name ${name} area is ${area} and pincode is ${pincode}`);
    
}

fullDetails({name:'john',area:'JH',pincode:1234});



//giving Default Value
function fullDetails({name,area='AreaName',pincode}){
    console.log(`${name} area is ${area} and pincode is ${pincode}`);
    
}

fullDetails({name:'john',pincode:1234});