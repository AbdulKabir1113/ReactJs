let students = [{id:101,name:'Rehan',gender:'Male',course:'JFS'},
                {id:102,name:'Maaz',gender:'Male',course:'PFS'},
                {id:103,name:'Zubair',gender:'Male',course:'JFS'}
]

// let newStd = console.log(students.filter((obj)=>{
//     return obj.name!='Rehan'
// }));

// console.log(newStd);

let newStd = console.log(students.filter((obj)=>{
    return obj.id!=102
}));
console.log(newStd);