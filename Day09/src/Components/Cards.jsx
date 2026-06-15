import Card from "./Card";

function Cards({ CartProducts, setCartProducts }) {

  const card1 = {
    id: 1,
    title: "Card 1",
    description: "Description for Card 1",
    image: "image1.jpg"
  };

  const card2 = {
    id: 2,
    title: "Card 2",
    description: "Description for Card 2",
    image: "image2.jpg"
  };

  const card3 = {
    id: 3,
    title: "Card 3",
    description: "Description for Card 3",
    image: "image3.jpg"
  };

  return (
    <>
      <Card
        card={card1}
        CartProducts={CartProducts}
        setCartProducts={setCartProducts}
      />

      <Card
        card={card2}
        CartProducts={CartProducts}
        setCartProducts={setCartProducts}
      />

      <Card
        card={card3}
        CartProducts={CartProducts}
        setCartProducts={setCartProducts}
      />
    </>
  );
}

export default Cards;