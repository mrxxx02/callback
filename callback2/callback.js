axios.get('https://jsonplaceholder.typicode.com/users/').then(res => {
  document.getElementById('data').innerHTML = render(res.data);
})

function render(result) {
  let table = '';
  result.forEach(data => {
    table += `<tr>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.username}</td>
                <td>${data.email}</td>
                <td>
                  ${data.address.street},
                  ${data.address.suite}, 
                  ${data.address.city}
                 </td>
                <td>${data.phone}</td>
                <td>${data.website}</td>
                <td>${data.company.name}</td>
              </tr>`;
  })
  return table;
} 

function message(msg) {
  return `<tr>
            <td class="text-center" colspan="8">${msg}</td>
        </tr>`;
}