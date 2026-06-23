import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const EffectEg3 = () => {
  const [state, setState] = useState([]);

 
 async function fetchApi() {
  try {
//     let { data } = await axios.get("https://dummyjson.com/products");
//     setState(data.products);
    let response = await axios.get("https://dummyjson.com/products");
    setState(response.data.products);
  } catch (err) {
    console.log(err);
  }
}

  useEffect(() => {fetchApi(); }, []);

  return (
    <div className="container">
      {state.map((prod) => (
        <Card key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default EffectEg3;