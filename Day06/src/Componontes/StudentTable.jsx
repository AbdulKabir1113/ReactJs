import studentdata from "./StudentData";

const StudentTable = () => {
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {/* <StudentRow id={101} name="Kabir" />
                <StudentRow /> */}

                {
                    studentdata.map(({id,name}) => (
                        <StudentRow id={id} name={name}
                        />
                    ))
                }
            </tbody>
        </table>
    )
}

// function StudentRow({ id, name }) {
//     return (
//         <tr>
//             <td>{id}</td>
//             <td>{name}</td>
//         </tr>
//     )
// }

// default props;
// function StudentRow({ id=0, name='stdname' }) {
//     return (
//         <tr>
//             <td>{id}</td>
//             <td>{name}</td>
//         </tr>
//     )
// }

// default props;
// falsy values;
// 0, '', false, NaN, null, undefined
// if we send props as 0 then it works || bcz falsy value to avoid these use nullish coalesing operator

// function StudentRow({ id, name }) {
//     return (
//         <tr>
//             <td>{id || 0}</td>
//             <td>{name || 'stdname'}</td>
//         </tr>
//     )
// }

// default nullish Coalescing props;
//null
//undefined

function StudentRow({ id, name }) {
    return (
        <tr>
            <td>{id ?? 0}</td>
            <td>{name ?? 'stdname'}</td>
        </tr>
    )
}
export default StudentTable;