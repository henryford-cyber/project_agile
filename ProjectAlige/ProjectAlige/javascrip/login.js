const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container-item-box");
let users = [];
let userLogin = [];

$(() => {
  const logged = document.getElementById("logged");
  userLogin = localStorage.getItem("user_login")
    ? JSON.parse(localStorage.getItem("user_login"))
    : [];
  if (userLogin.length != 0) {
    logged.innerHTML = "Đăng xuất";
    logged.addEventListener("click", () => {
      localStorage.removeItem("user_login");
      window.location.href = "/login.html";
    });
  } else {
    logged.innerHTML = "Đăng nhập";
    logged.addEventListener("click", () => {
      window.location.href = "/login.html";
    });
  }
});

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function registerNewUser() {
  var fullName = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password-sign").value;
  var confirmPassword = document.getElementById("confirmpassword").value;
  var notification = document.getElementById("notification");

  if (!fullName || !email || !password || !confirmPassword) {
    notification.innerHTML = "Vui lòng nhập thông tin !";
  } else notification.innerHTML = "";

  if (password != confirmPassword) {
    notification.innerHTML = "Nhập lại mật khẩu chưa chính xác !";
  } else notification.innerHTML = "";

  if (!fullName || !email || !password || !confirmPassword === null) {
    notification.innerHTML = "Vui lòng nhập thông tin !";
  } else notification.innerHTML = "";

  var user = {
    username: fullName,
    email: email,
    password: password,
  };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

document.getElementById("log-in").addEventListener("click", () => {
  var username = $("#username").val();
  var password = $("#passwork").val();
  users = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (
    users.some(
      (user) => user.username === username && user.password === password
    )
  ) {
    var user = {
      username,
      password,
    };
    console.log(user);
    userLogin.push(user);
    localStorage.setItem("user_login", JSON.stringify(userLogin));
    document.getElementById("notifi-login").innerHTML = "Đăng nhập thành công";
    window.open("http://127.0.0.1:5502/Index.html");
    return;
  }

  if (
    !users.every(
      (user) => user.username === username && user.password === password
    )
  ) {
    document.getElementById("notifi-login").innerHTML =
      "Tài khoản && mật khẩu chưa chính xác";
  }
});
