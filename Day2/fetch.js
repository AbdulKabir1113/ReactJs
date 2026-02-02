// 1st way use of async await
async function fetchingdata(){
    try{
        let data = await fetch('https://fakestoreapi.com/products')

        console.log(data);
    
        let finaldata = await data.json()
        console.log(finaldata);
    }
    catch(error){
        console.log(error);
        
    }
}

fetchingdata();

// 2nd way in a single line use of async await

async function fetchingdata1(){
    try{
        let data = await (await fetch('https://fakestoreapi.com/products')).json()

        console.log(data);
    
    }
    catch(error){
        console.log(error);
        
    }
}

fetchingdata1();

// fetcing api using then and catch

let data = fetch('https://fakestoreapi.com/products')

data.then((d)=>{
    console.log(d);
    let d1 = d.json();
    return d1;
})
.then((d)=>{
    console.log(d);
    
})