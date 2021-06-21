// const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
  const currentUserName = loginInput.value;
  if(currentUserName === ""){
    alert("please write your name");
  } else if(currentUserName.length > 15) {
    alert("your name is too long")
  }
  console.log('click');
}
loginButton.addEventListener("click", onLoginBtnClick )