function Card({ card, CartProducts, setCartProducts }) {

  const handleClick = (obj) => {

    const bool = CartProducts.some(
      (product) => product.id === obj.id
    );

    if (!bool) {
      setCartProducts([...CartProducts, obj]);
    } else {
      alert("Already Added");
    }
  };

  return (
    <>
      <div className="card">
        <img src={card.image} alt={card.title} />

        <h3>{card.title}</h3>

        <p>{card.description}</p>

        <button onClick={() => handleClick(card)}>
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default Card;