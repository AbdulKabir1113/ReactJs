function Cart({ CartProducts, setCartProducts }) {

  const handleDelete = (id) => {
    setCartProducts(
      CartProducts.filter(
        (product) => product.id !== id
      )
    );
  };

  return (
    <>
      <h1>Cart Details :</h1>

      {CartProducts.map(({ id, title, image }) => {
        return (
          <div key={id}>
            <img src={image} alt={title} />

            <h3>{title}</h3>

            <button
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Cart;