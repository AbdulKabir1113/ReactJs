import axios from "axios";
import { useEffect, useState } from "react";

const Read = () => {
  const [state, setState] = useState([]);

  const fetchApi = async () => {
    try {
      let { data } = await axios.get("http://localhost:3000/posts");
      setState(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {fetchApi();}, []);

  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Views</th>
        </tr>
      </thead>
      <tbody>
        {state.map(({ id, title, views }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{views}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Read;