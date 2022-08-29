const url = "http://localhost:3000/product";



fetch(url)
  .then(response => response.json())
  .then(data => {
    const listProduct = document.querySelector('#listProduct')

    data.forEach(element => {
      listProduct.innerHTML = `
      
      <div class="col ">
        <div class="mt-3 mb-4">
            <div class="card" style="width: 14rem; height: 390px;">
                <span class="heart-icon-cart mt-2"><i class="fa-solid fa-heart icon"></i></span>
                <img src="${element.image}"
                    class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="card-body-item ms-2">
                        <h6 class="card-title ms-5">Classico 4</h6>
                        <p class="card-text ms-3">
                            <span class="strike"> <strike>700,000 <u>đ</u></strike> </span>
                            <span class="span-price">500,000 <u>đ</u></span>
                        </p>
                        <button class="btn text-light ms-4 cart-slider"> Thêm vào giỏ</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
      `
    });
  });