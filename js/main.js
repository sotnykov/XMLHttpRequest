fetch('/positions')
  .then(response => response.json())
  .then(data => {
    const dataTable = document.getElementById('data-body');

    data.forEach((employee, index) => {
      const row = document.createElement('tr');
      const positionCell = document.createElement('td');
      const nameCell = document.createElement('td');
      const ageCell = document.createElement('td');
      const salaryCell = document.createElement('td');

      const positions = ['Investor', 'Manager', 'Assistant', 'Worker'];

      positionCell.textContent = positions[index];
      nameCell.textContent = employee.name;
      ageCell.textContent = employee.age;
      salaryCell.textContent = employee.salary;

      row.appendChild(positionCell);
      row.appendChild(nameCell);
      row.appendChild(ageCell);
      row.appendChild(salaryCell);

      dataTable.appendChild(row);
    });
  })
  .catch(error => console.error('Error:', error));