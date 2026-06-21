function Cards() {
  let cardDetails = [
    {
      id: 1,
      title: "Mobile",
      price: 78000,
    },
     {
      id: 2,
      title: "Mobile",
      price: 70000,
    },
  ];

  return (
    <>
      {cardDetails.map((ele) => (
        <div key={ele.id}>
          <h1>{ele.id}</h1>
          <h1>{ele.title}</h1>
          <h1>{ele.price}</h1>
        </div>
      ))}
    </>
  );
}

export default Cards;