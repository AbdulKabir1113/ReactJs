import cards_data from "./CardsData"

// const Cards = () =>{
//     return(
//         <div>
//             {cards_data.map(({id,image,title,price,description}) => {
//                 return(
//                     <div >
//                         <img src={image} alt="err" />
//                         <h3>{title}</h3>
//                         <p>{description}</p>
//                         <p>₹{price}</p>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }


const Cards = () =>{
    return(
        <div>
            {cards_data.map(({id=0,image='imgnotfound',title='no title',price=0,description='no desp'}) => {
                return(
                    <div >
                        <img src={image} alt="err" />
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <p>₹{price}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Cards;