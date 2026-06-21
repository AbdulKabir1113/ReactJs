function Table() {
  let students = [
    {
      id: 1,
      name: "kabir",
    },
    {
      id: 2,
      name: "Maaz",
    }
  ];

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {students.map((ele) => (
          <tr key={ele.id}>
            <td>{ele.id}</td>
            <td>{ele.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;