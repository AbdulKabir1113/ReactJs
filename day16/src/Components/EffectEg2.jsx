import { useEffect, useState } from "react";

const EffectEg2 = () => {
  let [state, setState] = useState([]);
  async function fetchApi() {
    try {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      setState(data.products);
         console.log(state);
         
        // console.log(data); rerandering and print contineously
    } catch (err) {
      console.log(err);
    }
  }
//   fetchApi
   useEffect(()=>{fetchApi()},[])

  return (
    <div>
      {state.map((prod) => {
        return (
          <div key={prod.id} >
            <h1>id:{prod.id}</h1>
            <h1>Title:{prod.title}</h1>
            <h1>Description:{prod.description}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default EffectEg2;