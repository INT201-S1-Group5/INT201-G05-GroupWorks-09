import product from "./uniqloProduct.js";

//สร้าง navbar
const navbarEle = document.querySelector('#navBar');

// รูป search
const searchBtn = document.createElement('button');
searchBtn.setAttribute('id', 'search');

const searchAppend = navbarEle.appendChild(searchBtn);

const searchIcon = document.createElement('img');
searchIcon.setAttribute('src', './image/icon/search.png');
searchAppend.appendChild(searchIcon);

// ช่อง search
const searchBar = document.createElement('span');
searchBar.setAttribute('id', 'searchBar');
navbarEle.appendChild(searchBar);

// ปุ่ม clear
const clearBtn = document.createElement('button');
clearBtn.setAttribute('id', 'clearBtn');
clearBtn.textContent = 'Clear';
navbarEle.appendChild(clearBtn);

// เลขบนตะกร้า
const amountInCart = document.createElement('span');
amountInCart.setAttribute('id', 'incart');
navbarEle.appendChild(amountInCart);

// รูป cart (ตะกร้า)
const cartIcon = document.createElement('img');
cartIcon.setAttribute('id', 'cart');
cartIcon.setAttribute('src', './image/icon/cart.png');
navbarEle.appendChild(cartIcon);

// สร้างปุ่มปรับโหมด
const bgColor = document.querySelector("#bgColor");

const lightModeBtn = document.createElement("button");
lightModeBtn.setAttribute("id", "light");
lightModeBtn.setAttribute("type", "button");
bgColor.appendChild(lightModeBtn);

const darkModeBtn = document.createElement("button");
darkModeBtn.setAttribute("id", "dark");
darkModeBtn.setAttribute("type", "button");
bgColor.appendChild(darkModeBtn);

const appendIconLight = bgColor.appendChild(lightModeBtn);

const iconLight = document.createElement("img");
iconLight.setAttribute("class", "icon");
iconLight.setAttribute("src", "./image/icon/sun.png");
appendIconLight.appendChild(iconLight);

const appendIconDark = bgColor.appendChild(darkModeBtn);

const iconDark = document.createElement("img");
iconDark.setAttribute("class", "icon");
iconDark.setAttribute("src", "./image/icon/moon.png");
appendIconDark.appendChild(iconDark);

//สร้าง product
const productEle = document.querySelector('#products');
for (let i = 0; i < product.length; i++) {

    const createDiv = document.createElement('div');
    createDiv.setAttribute('class', 'product');
    createDiv.setAttribute('id', product[i].productId);

    const append = productEle.appendChild(createDiv);

    const productName = document.createElement('h2');
    productName.setAttribute('class', product[i].productId);
    productName.textContent = product[i].productName;

    const productType = document.createElement('p');
    productType.textContent = product[i].productType;

    const productSize = document.createElement('p');
    productSize.textContent = product[i].productSize;

    const productDesc = document.createElement('p');
    productDesc.textContent = product[i].productDesc;

    const productPrice = document.createElement('p');
    productPrice.textContent = 'price : ' + product[i].productPrice + ' BAHT';

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product[i].img);

    const productStock = document.createElement('p');
    productStock.textContent = 'สินค้าคงเหลือ : ' + product[i].stock;

    // ปุ่ม add to cart
    const addToCartBtn = document.createElement('button');
    addToCartBtn.setAttribute('class', 'add');
    addToCartBtn.setAttribute('type', 'button');

    const appendBtn = append.appendChild(addToCartBtn);

    // รูปปุ่ม add to cart
    const addToCart = document.createElement('img');
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
