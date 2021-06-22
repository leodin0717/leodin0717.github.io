const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginSubmit(event){
  // const currentUserName = loginInput.value;
  // console.log(currentUserName);
  event.preventDefault();
  console.log(event);
  console.log(loginInput.value);
}
loginForm.addEventListener("submit",onLoginSubmit);