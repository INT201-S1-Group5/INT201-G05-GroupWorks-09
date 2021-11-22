import { CookieUtil } from "./cookie.js"

const addCart = document.querySelectorAll(".add"); //class ปุ่ม add to cart
const cartNumbers = document.querySelector("#cart"); //icon ตะกร้า
const cartEle = document.querySelector('#incart'); //ตัวเลขตะกร้า
const productList = document.querySelectorAll(".product"); //class product

let total = 0;
let cartCollect = {
    cart: [],
    id: [],
    total: CookieUtil.get("total", total)
};

cartEle.innerHTML = total;
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
                    productName: productList[i].getElementsByClassName(productID)[0].textContent
                },
                total: 1
            });
            CookieUtil.set("productID", cartCollect.id, new Date('January 1, 5000')); // เก็บรหัสสินค้าในคุกกี้
        }
        CookieUtil.set("productID", cartCollect.id, new Date('January 1, 5000'))
        CookieUtil.set("total", total, new Date('January 1, 5000')); // เก็บจำนวนรวมสินค้าทั้งหมดในคุกกี้
    }, )

}

if (cartCollect.total != 0) {
    cartEle.innerHTML = CookieUtil.get("total");
}

cartNumbers.addEventListener("click", () => {
    console.log(cartCollect) // สินค้าที่เลือก[ต่อครั้ง]
    console.log(document.cookie) // username, productID, total
}, );
