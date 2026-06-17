const Card = function({state,setState,cartProducts, setCartProducts}){
    
    const cards = [ {
            id: 1,
            title: "Card 1",
            description: "Description for Card 1",
            image: "image1.jpg"
            },
            {
            id: 2,
            title: "Card 2",
            description: "Description for Card 2",
            image: "image2.jpg"
            },
            {
            id: 3,
            title: "Card 3",
            description: "Description for Card 3",
            image: "image3.jpg"
            } ]; 
            
            const handleClick = (card)=>{
                const bool =    cartProducts.some((product) => product.id === card.id)
                
                if (!bool) {
                        setCartProducts([...cartProducts, card]);
                } else {
                        alert("Already Added");
            }

    
            }
    return(
        
        <>
        {cards.map((card) => {
        return (
        <div >
            <img src={card.image} alt="img" />
            <h1>{card.title}</h1>
            <p>{card.description}</p>
            <button onClick={()=>{handleClick(card)}}>Add to cart</button>
        </div>
    );
})}
        </>
    )
}

export default Card