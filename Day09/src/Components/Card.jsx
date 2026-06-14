function Card({ card, cartCount, setCartCount }) {

    const handleAddToCart = () => {
    setCartCount(cartCount + 1);
};
    return (
        <>
            <div className="card" >
                <img src={card.image} alt={card.title} />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </>
        )
}

export default Card;