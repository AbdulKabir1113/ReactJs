import React, { useState } from "react";

const FetchData = () => {
  let [state, setState] = useState([]);
  async function fetchApi() {
    try {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      setState(data.products);
      
      
        // console.log(data); rerandering and print contineously
    } catch (err) {
      console.log(err);
    }
  }
  fetchApi();

  return (
    <div>
      {state.map((prod) => {
        return (
          <div key={prod.id} className="api">
            <h1>id:{prod.id}</h1>
            <h1>Title:{prod.titel}</h1>
            <h1>Description:{prod.description}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default FetchData;