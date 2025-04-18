const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
  container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
  container.classList.remove("active");
});

const users = JSON.parse(localStorage.getItem('users')) || [];

function isValidEmail(email) {
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidName(name) {

  return name.trim() !== '';
}

function isValidPassword(password) {

  return password.length >= 6;
}

function addData(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (!isValidName(name)) {
    alert("Invalid Name");
    return;
  }

  if (!isValidEmail(email)) {
    alert("Invalid Email");
    return;
  }

  if (!isValidPassword(password)) {
    alert("Invalid Password (should be at least 6 characters)");
    return;
  }

  
  if (users.some(user => user.email === email)) {
    alert("Email already exists. Please use a different email.");
    return;
  }

  
  const newUser = { name, email, password };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Signed up successfully!");
}


function checkData(event) {
  event.preventDefault();
  var email = document.getElementById("mail").value;
  var password = document.getElementById("pwd").value;

  
  for (let i = 0; i < users.length; i++) {
    const currentUser = users[i];
    if (email == currentUser.email && password == currentUser.password) {
      alert("Login Successful");
      window.location.href = "/cart.html";
      return;
    }
  }
  alert("Incorrect Email or Password");
}
