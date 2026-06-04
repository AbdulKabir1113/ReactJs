// fetch('https:api.github.com/users')
// .then(response => response.json())
// .then(data => {
//     console.log(data);
    
// })

fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {
        let tbody = document.querySelector("tbody");

        data.forEach(user => {
            tbody.innerHTML += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.login}</td>
                    <td>
                        <img src="${user.avatar_url}" width="50" height="50">
                    </td>
                </tr>
            `;
        });
    })
    .catch(error => console.log(error));