import students_data from './StudentsData';



const StudentsTable = () => {
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>

            <tbody>
                {students_data.map(({ id, name, age }) => {
                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{age}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};



export default StudentsTable;