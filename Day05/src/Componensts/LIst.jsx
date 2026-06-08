const List = () =>{

    let fruits = [{item:"Mango", price:100},
                {item:"Banana", price:200},
                {item:"Apple", price:300},
    ]


    return(
        <ul>
            {fruits.map(({item,price})=>{
                return(
                    <li>{item} price is {price}</li>
                )
            })}
        </ul>
    )
}

export default List