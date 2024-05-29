let loginForm = document.getElementById('login-form');
let usernameInput = document.getElementById('username');
let loginDataTable = document.getElementById('login-data-table').getElementsByTagName('tbody')[0];

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); 
  

 
  let username = usernameInput.value.trim();

  
  if (username) {
   let  newRow = document.createElement('tr');
    let newCell = document.createElement('td');
    newCell.innerText = username;
    newRow.appendChild(newCell);
    loginDataTable.appendChild(newRow);
    usernameInput.value = ''; 
  } else {
    alert('Please enter a username');
  }
});