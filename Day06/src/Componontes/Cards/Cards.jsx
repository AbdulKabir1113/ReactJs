import cards_data from "./CardsData"


const Cards = () =>{
    return(
        <>
        
            {cards_data.map(({ image, title, price, description }) => {
    return (
        <CardsDetails
            image={image}
            title={title}
            price={price}
            description={description}
        />
    );
})}     
        </>
    )
}


function CardsDetails({ image, title, price, description }) {
  return (
    <div>
      <img src={image} alt="err" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}
export default Cards;