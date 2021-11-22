import { CookieUtil } from "./cookie.js"

let clearProducts = document.querySelector('#clearBtn')

function deleteAllCookies() { //ลบตัว cookie ออก 
    let clearProduct = [];
    CookieUtil.set('total', clearProduct, new Date(0));
    CookieUtil.set('productID', clearProduct, new Date(0));
    alert('Clear cart!');

    let productTotal = []; //ให้ค่า total เซ็ตเป็น 0 
    let setTotal = document.querySelector('#incart')
    setTotal.textContent = productTotal.length
    CookieUtil.set('total', productTotal.length);
}

clearProducts.addEventListener('click', () => {
    deleteAllCookies();
});
