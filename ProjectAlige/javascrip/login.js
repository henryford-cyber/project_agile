const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container-item-box");
let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) :  [];
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
    notification.innerHTML = 'Vui lòng nhập thông tin !'
  } else notification.innerHTML = '';

  if (password != confirmPassword) {
    notification.innerHTML = "Nhập lại mật khẩu chưa chính xác !"
  } else notification.innerHTML = '';

  if (!fullName || !email || !password || !confirmPassword === null) {
    notification.innerHTML = 'Vui lòng nhập thông tin !'
  } else notification.innerHTML = '';

  var user = {
    username: fullName,
    email: email,
    password: password,
  }
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
}

document.getElementById('log-in').addEventListener('click', () => {
  var username = $('#username').val();
  var password = $('#passwork').val();

  if (users.some(user => user.username === username && user.password === password)) {
    document.getElementById("notifi-login").innerHTML = "Đăng nhập thành công";
    window.open('/leeson/pages/tables', '_self');
      return;
  }
  
  if (!users.every(user => user.username === username && user.password === password)) {
    document.getElementById("notifi-login").innerHTML = "Tài khoản && mật khẩu chưa chính xác";
  }

});







 