function signUp() {
  let xhr = new XMLHttpRequest();
  let userEmail = document.querySelector("#email").value;
  let userPassword = document.querySelector("#password").value;

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      checkInput(xhr.response);
      if (xhr.response === "user exist") {
        //document.querySelector('body').innerHTML = xhr.response;
        let div = document.createElement("div");
        div.innerHTML = `<p>email is already used!</p>`;
        document.querySelector("body").appendChild(div);
      } else if (xhr.response === "new user"){
        window.location = "member";
      }
    }
  };

  url = `/insert_user?email=${userEmail}&password=${userPassword}`;
  xhr.open("GET", url);
  xhr.send();
}

function signIn() {
  let xhr = new XMLHttpRequest();
  let userEmail = document.querySelector("#email").value;
  let userPassword = document.querySelector("#password").value;

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      checkInput(xhr.response);
      if (xhr.response === "email not exist") {
        let div = document.createElement("div");
        div.innerHTML = `<p>user(email) not exist!</p>`;
        document.querySelector("body").appendChild(div);
      } else if (xhr.response === "password incorrect") {
        let div = document.createElement("div");
        div.innerHTML = `<p>password is incorrect!</p>`;
        document.querySelector("body").appendChild(div);
      } else if (xhr.response === "password correct") {
        window.location = "member";
      }
    }
  };

  url = `/login_user?email=${userEmail}&password=${userPassword}`;
  xhr.open("GET", url);
  xhr.send();
}

function checkInput(message) {
  if (message === "email or password can not be empty") {
    let div = document.createElement("div");
    div.innerHTML = `<p>email or password input can not be empty</p>`;
    document.querySelector("body").appendChild(div);
  }
  if (message === "email not valid") {
    let div = document.createElement("div");
    div.innerHTML = `<p>email address is not valid</p>`;
    document.querySelector("body").appendChild(div);
  }
}
