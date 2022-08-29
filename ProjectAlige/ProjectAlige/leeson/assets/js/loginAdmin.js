var x = true;
let id = "";
const editModalForm = document.querySelector(
  "#myEditModal .custom-validation-item"
);
var editpassword = document.querySelector(".editpassword");
const editModalFormadmin = document.querySelector(
  "#myEditModal .custom-validation-item");
let users = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];
const tableUsers = document.querySelector("#table");
// $(() => {
//     buttonEdit()
// })
$(() => {
  $("#dssp").append(() => {
    return users.map((user, indenid) => {
      return `
      <tr>
      <td class="users-email">${user.email}</td>
      <td class="users-username">${user.username}</td>
      <td class="d-flex"><input type="password" class="form-control border-0 users-password" id="pass" value=${user.password}>
          <span class="clickicon fas fa-eye-slash"></span>
      </td>
      <td class="">
          <button class="ModalButton btn btn-edit text-success deleteBtn  fas fa-user-edit"  data-id="${indenid}">
           
          </button> 
          <button class="btn btn-del delete-btn ms-2 text-primary fas fa-trash-alt" data-id="${user.id}">
           
          </button>
      </td>   
    </tr>
        `;
    });
  });
  $(document).ready(function () {
    document.querySelectorAll(".ModalButton").forEach((item) => {
      item.addEventListener("click", (e) => {
        let id = e.target.getAttribute("data-id");
        contentModal.innerHTML = "";
        contentModal.insertAdjacentHTML(
          "afterbegin",
          `
              <div class="form-group">
              <label>Email</label>
              <div>
                  <input 
                  name="name" 
                  type="text" 
                  class="form-control input-save"
                  id="validationServer01" 
                  placeholder="Username" 
                  value="${users[id].email}"
                  required />
              </div>
          </div>
          <div class="form-group">
              <label>Username</label>
              <div>
                  <input 
                  name="tag" 
                  type="text" 
                  class="form-control input-save"
                  id="validationServer02" 
                  placeholder="Email" 
                  value="${users[id].username}"
                  required />
              </div>
          </div>
          <div class="form-group">
              <label>Mật khẩu</label>
              <div>
                  <input 
                  name="price" 
                  type="text" 
                  class="form-control input-save"
                  id="validationServer03" 
                  placeholder="Mật khẩu" 
                  value="${users[id].password}"
                  required />
              </div>
          </div>
          <button class="btn btn-primary save-product" data-id="${id}" type="button">
           Save data
          </button>
          `
        );
        $("#myEditModalitem").modal("show");
        addEventUpdate();
        deleteEvent();
      });
    });
  });
});

const addEventUpdate = () => {
    let button = document.getElementsByClassName('save-product');
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', updateAccount)
    }
}

const updateAccount = (e) => {
    e.preventDefault();
    let id = e.target.getAttribute('data-id');
    let input = document.getElementsByClassName('input-save');
    let email = input[0].value;
    let username = input[1].value;
    let password = input[2].value;
    let usersEmail = document.getElementsByClassName('users-email')[0];
    let usersUsername = document.getElementsByClassName('users-username')[0];
    let usersPassword = document.getElementsByClassName('users-password')[0];
    let user = {
        username,
        email,
        password
    }
    users[id] = user;
    usersEmail.innerText = email;
    usersUsername.innerText = username;
    usersPassword.value = password;
    localStorage.setItem('users', JSON.stringify(users));
}


const deleteEvent = () => {
  let buttonDelete = document.getElementsByClassName('delete-btn');
  for (let i = 0; i < buttonDelete.length; i++) {
    buttonDelete[i].addEventListener('click',deleteProduct)
  }
}

const deleteProduct = (e) => {
  e.target.parentElement.parentElement.remove();
  let id = e.target.getAttribute('data-id');
  let index = users.findIndex(item => item.id == id);
  users.splice(index,1);
  localStorage.setItem('users', JSON.stringify(users));
}



$('.clickicon').click((e) => {
 e.preventDefault();
 if(x) {
  document.getElementById('pass').type = "text";
  x = false;
 }else {
   document.getElementById('pass').type = "password";
   x = true;
 }

})

