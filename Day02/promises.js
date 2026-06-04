let p1 = new Promise((res,rej)=>{
    let num = 0;
    if(num>0){
        console.log("Positive Number");
        res("positive number")
    }else{
        rej("negative number")
    }
})
.then((res)=>{

    console.log("Positive Number");
})
console.log("pos");

p1.catch((rej)=>{
    console.log(rej);
    
})