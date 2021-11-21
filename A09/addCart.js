import { CookieUtil } from "./cookie.js"

let addCart = document.querySelectorAll(".add");
let cartNumbers = document.querySelector("#cart");
let cartEle = document.querySelector('#incart'); //ตัวเลขตะกร้า
let productList = document.querySelectorAll(".product");

let total = 0;
let cartCollect = {
    cart: [],
    id: [],
    total: CookieUtil.get("total")
};

cartEle.innerHTML = total; //
for (let i = 0; i < addCart.length; i++) {
    addCart[i].addEventListener("click", () => {
        alert(`เพิ่มสินค้า 1 ชิ้น`);
        total += 1;
        cartEle.innerHTML = total;

        let productID = productList[i].id;
        if (cartCollect.id.includes(productID)) {
            let id = cartCollect.id.indexOf(productID);
            cartCollect.cart[id].total += 1;
        } else {
            cartCollect.id.push(productID);
            cartCollect.cart.push({
                productDetails: {
                    productID: productID,
                    productName: productList[i].getElementsByClassName(productID)[0].textContent,
                },
                total: 1
            });
            CookieUtil.set("productID", cartCollect.id, 1); // เก็บรหัสสินค้าในคุกกี้
        }

        CookieUtil.set("total", total, 365); // เก็บจำนวนรวมสินค้าทั้งหมดในคุกกี้
    }, true)

}

if (cartCollect.total != 0) {
    cartEle.innerHTML = CookieUtil.get("total");
} else {
    total += 1;
}

cartNumbers.addEventListener("click", () => {
    console.log(cartCollect) // สินค้าที่เลือก[ต่อครั้ง]
    console.log(document.cookie) // username, productID, total
}, true);