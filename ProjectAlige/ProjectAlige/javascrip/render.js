const url = "http://localhost:3000/products";
var listProduct = [];
fetch(url).then((res) => res.json()).then((data) => {
  (listProduct = [...data]);
  product(listProduct);
})
function product(list) {
  list.map((product) => {
    rendenrProduct.insertAdjacentHTML(
      "afterbegin",
      `
    <div class="col ">
    <div class="mt-3 mb-4">
        <div class="card" style="width: 14rem; height: 390px;">
            <span class="heart-icon-cart mt-2"><i class="fa-solid fa-heart icon"></i></span>
            <img src="${product.image}"
                class="card-img-top" alt="...">
            <div class="card-body">
                <div class="card-body-item ms-2">
                    <h6 class="card-title ms-5">${product.name}</h6>
                    <p class="card-text ms-3">
                        <span class="strike"> <strike>${product.price}<u>đ</u></strike> </span>
                        <span class="span-price">${product.sale}<u>đ</u></span>
                    </p>
                    <a href="" class="btn text-light ms-4 cart-slider">Thêm vào giỏ</a>
                </div>
            </div>
        </div>
    </div>
</div>
    `
    )
  })
}