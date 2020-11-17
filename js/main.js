function validateData_register() {
    var userName = document.forms["register"]["username"].value;
    var email = document.forms["register"]["email"].value;
    var password = document.forms["register"]["password"].value;
    if (userName == "") {
        document.getElementById("invalidUserName").innerText = "Please enter username";
        return false;
    } else if (email == "") {
        document.getElementById("invalidEmail").innerText = "Please enter your email";
        return false;
    } else if (password == "") {
        document.getElementById("invalidPassword").innerText = "Please enter your password";
        return false;
    }
}

function validateData_login() {
    var email = document.forms["login"]["email"].value;
    var password = document.forms["login"]["password"].value;
    if (email == "") {
        document.getElementById("invalidEmail").innerText = "Please enter your email";
        return false;
    } else if (password == "") {
        document.getElementById("invalidPassword").innerText = "Please enter your password";
        return false;
    }
}

let carts = document.querySelectorAll('.add-cart');
let products = [{
    name: 'Shirt',
    tag: 'tshirt',
    price: 15,
    inCart: 0
}]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1 + ' item(s)';
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.cart span').textContent = 1 + ' item(s)';
    }
}


onLoadCartNumbers();