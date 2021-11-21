import product from "./uniqloProduct.js";
// import deleteAllCookies from "./clearCookies.js";

//สร้าง navbar
const navbarEle = document.querySelector('#navBar');

// รูป search
let searchBtn = document.createElement('button');
searchBtn.setAttribute('id', 'search');

let searchAppend = navbarEle.appendChild(searchBtn);

let searchIcon = document.createElement('img');
searchIcon.setAttribute('src', './image/icon/search.png');
searchAppend.appendChild(searchIcon);

// ช่อง search
let searchBar = document.createElement('span');
searchBar.setAttribute('id', 'searchBar');
navbarEle.appendChild(searchBar);

// ปุ่ม clear
let clearBtn = document.createElement('button');
clearBtn.setAttribute('id', 'clearBtn');
// clearBtn.setAttribute('onclick', 'deleteAllCookies()');
clearBtn.textContent = 'Clear';
navbarEle.appendChild(clearBtn);

// เลขบนตะกร้า
let amountInCart = document.createElement('span');
amountInCart.setAttribute('id', 'incart');
navbarEle.appendChild(amountInCart);

// รูป cart (ตะกร้า)
let cartIcon = document.createElement('img');
cartIcon.setAttribute('id', 'cart');
cartIcon.setAttribute('src', './image/icon/cart.png');
navbarEle.appendChild(cartIcon);

// สร้างปุ่มปรับโหมด
let bgColor = document.querySelector("#bgColor");

let lightModeBtn = document.createElement("button");
lightModeBtn.setAttribute("id", "light");
lightModeBtn.setAttribute("type", "button");
bgColor.appendChild(lightModeBtn);

let darkModeBtn = document.createElement("button");
darkModeBtn.setAttribute("id", "dark");
darkModeBtn.setAttribute("type", "button");
bgColor.appendChild(darkModeBtn);

let appendIconLight = bgColor.appendChild(lightModeBtn);

let iconLight = document.createElement("img");
iconLight.setAttribute("class", "icon");
iconLight.setAttribute("src", "./image/icon/sun.png");
appendIconLight.appendChild(iconLight);

let appendIconDark = bgColor.appendChild(darkModeBtn);

let iconDark = document.createElement("img");
iconDark.setAttribute("class", "icon");
iconDark.setAttribute("src", "./image/icon/moon.png");
appendIconDark.appendChild(iconDark);

//สร้าง product
const productEle = document.querySelector('#products');
for (let i = 0; i < product.length; i++) {

    let createDiv = document.createElement('div');
    createDiv.setAttribute('class', 'product');
    createDiv.setAttribute('id', product[i].productId);

    let append = productEle.appendChild(createDiv);

    let productName = document.createElement('h2');
    productName.setAttribute('class', product[i].productId);
    productName.textContent = product[i].productName;

    let productType = document.createElement('p');
    productType.textContent = product[i].productType;

    let productSize = document.createElement('p');
    productSize.textContent = product[i].productSize;

    let productDesc = document.createElement('p');
    productDesc.textContent = product[i].productDesc;

    let productPrice = document.createElement('p');
    productPrice.textContent = 'price : ' + product[i].productPrice + ' BAHT';

    let productImg = document.createElement('img');
    productImg.setAttribute('src', product[i].img);

    let productStock = document.createElement('p');
    productStock.textContent = 'สินค้าคงเหลือ : ' + product[i].stock;

    // ปุ่ม add to cart
    let addToCartBtn = document.createElement('button');
    addToCartBtn.setAttribute('class', 'add');
    addToCartBtn.setAttribute('type', 'button');

    let appendBtn = append.appendChild(addToCartBtn);

    // รูปปุ่ม add to cart
    let addToCart = document.createElement('img');
    addToCart.setAttribute('class', 'addImg');
    addToCart.setAttribute('src', './image/icon/addToCart.png');
    appendBtn.appendChild(addToCart);


    append.appendChild(productImg);
    append.appendChild(productName);
    append.appendChild(productType);
    append.appendChild(productSize);
    append.appendChild(productDesc);
    append.appendChild(productPrice);
    append.appendChild(productStock);
    append.appendChild(addToCartBtn);

}