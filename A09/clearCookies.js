import { CookieUtil } from "./cookie.js"

let clearProducts = document.querySelector('#clearBtn')

function deleteAllCookies() { //ลบตัว cookie ออก โดยตั้งค่าให้อายุของ cookie น้อยกว่าเวลาปัจจุบัน
    clearProducts.cookie = "total= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    clearProducts.cookie = "productID= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    alert('Clear cart!');
    let productTotal = [];
    let setTotal = document.querySelector('#incart')
    setTotal.textContent = productTotal.length
    CookieUtil.set('total', productTotal.length);
}

clearProducts.addEventListener('click', () => {
    deleteAllCookies();
});
