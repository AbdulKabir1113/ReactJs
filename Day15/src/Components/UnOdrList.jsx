function UnOdrList() {
  const fruits = ["apple", "banana", "mango","apple"];

  return (
    <ul>
      {fruits.map((ele,ind) => (
        <li key={ind}>{ele}</li>
      ))}
    </ul>
  );
}

export default UnOdrList;