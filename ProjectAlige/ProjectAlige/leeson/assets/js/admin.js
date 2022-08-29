const url = "http://localhost:3000/products";
const addForm = document.querySelector('.custom-validation');
const editForm = document.querySelector("#editform");
let id = '';

fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(product => {
            rendenrProducts(product);
        });
    });



const rendenrProduct = document.querySelector('#list-products');
const rendenrProducts = (product) => {
    const output = `
    <tr data-id = '${product.id}'>
    <td class="imgfont"><img class="img-fluid" src="${product.image}" alt=""></td>
    <td class="fontt">${product.name}</td>
    <td class="fontt">${product.price}</td>
    <td class="fontt">${product.sale}</td>
    <td class="">
        <a class="btn-edit text-success" style="cursor: pointer;"><i class="fas fa-user-edit"></i></a> 
        <a class="btn-del ms-2 text-primary mr -5" style="cursor: pointer;"><i class="fas fa-trash-alt"></i></a>
    </td>   
</tr>
    `;
    rendenrProduct.insertAdjacentHTML('beforeend', output);
    const btndel = document.querySelector(`[data-id = '${product.id}']  .btn-del`);
    btndel.addEventListener('click', (e) => {
        fetch(`${url}/${product.id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(() => location.reload());
    });
    // edit
    const btnEdit = document.querySelector(`[data-id = '${product.id}']  .btn-edit`);
    btnEdit.addEventListener('click', (e) => {
        e.preventDefault();
        id = product.id;
        $("#myEditModal").modal('show');
        editForm.name.value = product.name;
        editForm.price.value = product.price;
        editForm.sale.value = product.sale;
        editForm.image.value = product.image;
    });
}


addForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = document.getElementsByClassName('input-add');
    var name = input[0].value;
    var price = input[1].value;
    var sale = input[2].value;
    var url = input[3].value;

    var product = {
        image: url,
        name,
        price,
        sale,
    }
    fetch(`http://localhost:3000/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product),
    }).then(res => console.log(res));
});


editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: editForm.name.value,
            price: editForm.price.value,
            sale: editForm.sale.value,
            image: editForm.image.value,
        })
    })
        .then(res => res.json())
        .then((data) => console.log(data));
    editForm.name.value = '';
    editForm.price.value = '';
    editForm.sale.value = '';
    editForm.image.value = '';
}, false);

xinchao.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(122131);
})