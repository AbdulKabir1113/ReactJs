import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchApi = async () => {
    try {
      const result = await axios.get("https://fakestoreapi.com/products");
      setProducts(result.data);
      setLoading(true)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
    {loading === true ? <div className="flex justify-around flex-wrap gap-10 m-10">
      {products.map(({ id, title, price, image, description }) => (
        <div key={id} className="w-72 border rounded-lg p-4 shadow-lg">
          <img src={image} alt={title} className="w-full h-52 object-contain"/>

          <h3 className="font-bold mt-3"> {title}</h3>

          <p className="text-gray-600 mt-2">{description.slice(0, 100)}...</p>


          <Link to={`/product/${id}`}>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Know More</button>
          </Link>
        </div>
      ))}
    </div> : <Spinner/>}
    </>
  );
};

export default Products;


