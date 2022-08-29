//click chọn giỏ hàng
function show() {
  document.getElementById("displayBlock").classList.toggle("active");
  if (!user.classList.toggle("active")) {
  } else {
    user.classList.toggle("active");
  }
}

// THÊM SP VÀO GIỎ HÀNG
//lấy giá trị giỏ hàng
var addToCart = document.getElementsByClassName("add-to-cart");
for (var i = 0; i < addToCart.length; i++) {
  var button = addToCart[i];
  button.addEventListener("click", addToCartClicked);
}

function addToCartClicked(event) {
  var button = event.target.parentElement;
  var ShopItem = button.parentElement.parentElement;
  var TenSP = ShopItem.getElementsByClassName("ten-item-column")[0].innerText;
  var Gia = ShopItem.getElementsByClassName("gia")[0].innerText;
  var img = ShopItem.getElementsByClassName("image")[0].src;
  console.log(TenSP, Gia, img);
  addToCartl(TenSP, Gia, img);
  remove();
}

function addToCartl(TenSP, Gia, img) {
  var cartRow = document.createElement("div");

  cartRow.classList.add("cart-item1");
  var cartItems = document.getElementsByClassName("column-cart")[0];

  var tenspGiohang = document.getElementsByClassName("TensP-Item");
  // kiểm tra sp có trong giỏ hàng hay chưa?
  for (var i = 0; i < tenspGiohang.length; i++) {
    if (tenspGiohang[i].innerText == TenSP) {
      var SL_input = document.getElementsByClassName("soluong-cart");
      for (var i = 0; i < SL_input.length; i++) {
        var input = SL_input[i];

        if (tenspGiohang[i].innerText == TenSP) {
          input = input.value++;
          alert("Đã tăng số lượng sản phẩm này lên " + (input + 1));
        }
      }

      return;
    }
  }

  var noidungItems = `
  <div class="item-column-cart">
    <div class="item-img-cart">
      <img class="image-cart" src="${img}" />
    </div>
    <div class="ten-item-column-cart">
        <a href="#" class="TensP-Item">${TenSP}</a>
    </div>
      <p class="gia-cart">${Gia}</p>  
      <input class="soluong-cart" type="number" min="1" value = "1"></p> 
    <div class="clear"></div>
    <button class="btn-remove" type="button">Xóa</button>
</div>
		
  `;
  // dán dữ liệu vào giỏ hàng
  cartRow.innerHTML = noidungItems;

  alert("Đã thêm vào giỏ hàng");
  cartItems.append(cartRow);
  console.log(TenSP, Gia, img);
  capnhatTongtien();
}

//XÓA SP
function remove() {
  var btn_Removee = document.getElementsByClassName("btn-remove");
  for (var i = 0; i < btn_Removee.length; i++) {
    var buttonde = btn_Removee[i];

    buttonde.addEventListener("click", function () {
      var buttonClicked = event.target;
      buttonClicked.parentElement.parentElement.remove();
      capnhatTongtien();
    });
  }
}
//kiểm tra số lượng có tăng -> cập nhật lại tổng tiền
function checkChangeSL(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }

  capnhatTongtien();
}

//CẬP NHẬT TỔNG TIỀN
function capnhatTongtien() {
  var giohang = document.getElementsByClassName("column-cart")[0];
  var hang_GioHang = document.getElementsByClassName("cart-item1");

  var tongTien = 0;
  for (var i = 0; i < hang_GioHang.length; i++) {
    var hang = hang_GioHang[i];
    var _Gia = hang.getElementsByClassName("gia-cart")[0];
    var _Soluong = hang.getElementsByClassName("soluong-cart")[0];

    // var gia = parseFloat(_Gia.innerText.replace('đ', ''))
    var gia = parseFloat(_Gia.innerText.replace("đ", "").replace(".", ""));

    var sl = _Soluong.value; // giá trị số lượng
    tongTien += gia * sl; // tổng tiền = giá * sl

    //console.log(tongTien);
  }

  // lấy input số lượng ra
  document.getElementsByClassName("cart-total-price")[0].innerText =
    tongTien + "000 đ";
  var SL_input = document.getElementsByClassName("soluong-cart");
  for (var i = 0; i < SL_input.length; i++) {
    var input = SL_input[i];
    input.addEventListener("change", checkChangeSL);
  }
}
