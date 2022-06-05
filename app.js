const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#yeajin");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// function onLoginSubmit(){
// function onLoginBtnClick(){
    // console.log(loginInput.value);
//     const value = loginInput.value;
//     if(value === "") {
//         alert("Please write your name");
//     } else if(username.length>15) {
//         alert("Your name is too long.")
//     }
// }
//   const username = loginInput.value;
//   console.log(username);

// loginButton.addEventListener("click", onLoginBtnClick);}

 

  function onLoginSubmit(event){
      event.preventDefault();
      loginForm.classList.add(HIDDEN_CLASSNAME);
      const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    //   greeting.innerText = `Hello ${username}`;
    //   greeting.innerText = "Hello "+ username;
    //   greeting.classList.remove(HIDDEN_CLASSNAME)
    paintGreetings(username);
    //   console.log(event);
    // alert("clicked!");
  }

  function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

  }
  // loginForm.addEventListener("submit", onLoginSubmit);
//   link.addEventListener("click", handleLinkClick)
const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greetings
paintGreetings(savedUsername);
}