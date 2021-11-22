import { CookieUtil } from "./cookie.js"

function userNameCookie() { //ฟังก์ชันเก็บ user name
    if (CookieUtil.get('userName') == null) { //ถ้ายังไม่มี user name ก็จะให้กรอกเข้ามา
        let userCookie = window.prompt("Enter your name:"); //เก็บ user name ในตัวแปร userCookie
        CookieUtil.set('userName', userCookie, new Date('January 1, 5000')); //จัดเก็บตัว Cookie ตามชื่อ user และระยะเวลาที่กำหนด
    } else {
        alert(`Welcome back ${CookieUtil.get('userName')}`); //ถ้ามีผู้แล้วก็จะแสดงชื่อผู้ใช้
    }
}

userNameCookie();
