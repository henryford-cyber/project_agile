let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: "watch",
        tag: "black watch",
        price: 15,
        inCart: 0,
    },
    {
        name: "watch",
        tag: "grey watch",
        price: 20,
        inCart: 0,
    },
    {
        name: "watch",
        tag: "red watch",
        price: 15,
        inCart: 0,
    },
    {
        name: "watch",
        tag: "blue watch",
        price: 20,
        inCart: 0,
    },

]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product)
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify
        (cartItems));
}


function totalCost(product) {
    // console.log("the product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');

    console.log("my cartCost is", cartCost);
    console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost +
            product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector
    (".products");
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems);
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="PROJECTALIGE/learn/images/${item.tag}.png">
                <span>${item.name}</span>
                <div class="price">${item.price},00</div>
                <divv class="quantity">
                    <ion-icon name="arrow-dropleft-circle"></ion-icon>
                    <span>${item.inCart}</span>
                    <ion-icon name="arrow-dropleft-circle"></ion-icon>
                </div>
                <div class="total>
                    ${item.inCart * item.price},00
                </div>
            `
        });
        productContainer.innerHTML += `
            <div class="basketTotalContainer">
            <h4 class="baskerTotalTitle">
                Basket Total
            </h4>
            <h4 class="basketTotal">
                $${cartCost},00
            </h4>
        `


    }
}



onLoadCartNumbers();
displayCart();