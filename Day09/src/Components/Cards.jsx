import Card from "./Card";
function Cards({cartCount, setCartCount }) {
     let card1 = 
        {
            id: 1,  
            title: "Card 1",
            description: "Description for Card 1",
            image: "image1.jpg"
        }
        let card2 = 
        {
            id: 2,  
            title: "Card 2",
            description: "Description for Card 2",
            image: "image2.jpg"
        }
        let card3 = 
        {
            id: 3,  
            title: "Card 3",
            description: "Description for Card 3",
            image: "image3.jpg"
        }

    
    return (
        <>
        <Card card={card1} cartCount={cartCount} setCartCount={setCartCount}/>

        <Card card={card2} cartCount={cartCount}  setCartCount={setCartCount}/>

        <Card card={card3} cartCount={cartCount} setCartCount={setCartCount}/>
        </>
    )
}

export default Cards;