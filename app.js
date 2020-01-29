const usersList = document.querySelector('#usersList');
const renderUsers = (users) =>
{
    const html = users.users.map( user =>
    {
        return `
            <tr><td>${user.firstName}</td><td> ${user.lastName} </td><td> ${user.email}</td><td>  ${user.title}</td></tr>  
`
    }).join('');
    usersList.innerHTML = html;
}
const u = fetch('https://acme-users-api-rev.herokuapp.com/api/users')
.then( response => response.json())
.then( result => renderUsers(result))