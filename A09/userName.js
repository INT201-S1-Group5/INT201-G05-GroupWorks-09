import { CookieUtil } from "./cookie.js"

function userNameCookie() {
    if (CookieUtil.get('userName') == null) {
        let userCookie = window.prompt("Enter your name:");
        CookieUtil.set('userName', userCookie, new Date('January 1, 5000'));
    } else {
        alert(`Welcome back ${CookieUtil.get('userName')}`);
    }
}

userNameCookie();