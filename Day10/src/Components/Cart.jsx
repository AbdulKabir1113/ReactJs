function Cart({cartProducts, setCartProducts}){

    const handleDelete = (id) => {
        const updatedCart = cartProducts.filter((product) => product.id !== id);
        setCartProducts(updatedCart);
    }
    return(
        <>
        <h1>Cart Details :</h1>

        {cartProducts.map(({ id, title, image }) => {
        return (
            <div key={id}>
            <img src={image} alt={title} />

            <h3>{title}</h3>
            <button onClick={() => handleDelete(id)}>Remove</button>
            </div>
        );
        })}
        
        </>
    )
}

export default Cart