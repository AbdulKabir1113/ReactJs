import EmpData from './EmpData'

function EmpTable() {
  return (
    <div>
      <h2>Employee List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {EmpData.map(({name,id,email,salary,department}) => (
           
           <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{salary}</td>
              <td>{department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmpTable;