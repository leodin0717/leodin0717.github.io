const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";  
//본인이 생성한 문자열을 반복해서 사용하게 될 경우엔 이렇게 대문자 변수안에 넣는다.

function onLoginSubmit(event){
  // const currentUserName = loginInput.value;
  // console.log(currentUserName);
  event.preventDefault();
  const currentUserName = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem("USERNAME_KEY", currentUserName)
  // greeting.innerText = "Hello " + currentUserName;
  // greeting.innerText = `Hello ${currentUserName}`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(username);
}
function paintGreetings (username){
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
function handleLinkClick(event){
  event.preventDefault();
  console.dir(event);
  // alert('clicked'); //모든 동작을 막는다.
}
loginForm.addEventListener("submit",onLoginSubmit);

const savedUsername = localStorage.getItem("USERNAME_KEY");
// console.log(savedUsername); null
 
if(savedUsername === null){
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);

} else{
  // show the grettings
  // greeting.innerText = `Hello ${savedUsername}`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
  


}
