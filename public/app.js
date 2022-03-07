const form = document.getElementById('#form');
const renderData = fetch('/users')
  .then(res => res.json())
  .then(users => {
    const table = document.getElementById('users-table');
    users.forEach(user => {
      const row = document.createElement('tr');
      const name = document.createElement('td');
      name.textContent = user.username;
      row.appendChild(name);
      const location = document.createElement('td');
      location.textContent = user.location;
      const deleteBtn = document.createElement('td');
      const deleteLink = document.createElement('a');
      deleteBtn.appendChild(deleteLink);
      deleteLink.classList.add('delete-btn');
      deleteLink.textContent = 'Delete';

      deleteLink.href = `/users/${user.id}`;

      row.appendChild(location);
      row.appendChild(deleteBtn);
      table.appendChild(row);

      deleteLink.addEventListener('click', e => {
        e.preventDefault();
        window.location.reload();
        fetch(deleteLink.href, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            location.parentNode.remove();
          });
      });
    });
  });
