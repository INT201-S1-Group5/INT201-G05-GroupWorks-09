const body = document.querySelector("body")
const switchDark = document.querySelector("#dark");
const switchLight = document.querySelector("#light");
const mode = localStorage.getItem("theme")

function lightMode() { //ฟังก์ชัน lightMode 
    body.style.backgroundColor = "white";
    body.style.color = "black";
    switchLight.style.backgroundColor = "#CCCBCB";
    switchDark.style.backgroundColor = "white";
}

function darkMode() { //ฟังก์ชัน darkMode
    body.style.backgroundColor = "black";
    body.style.color = "white";
    switchDark.style.backgroundColor = "#CCCBCB";
    switchLight.style.backgroundColor = "white";
}

if (mode == "dark") { //ถ้าเป็น darkMode ก็ยังงแดสงผลหมือนเดิม 
    darkMode();
} else { //แต่ถ้าไม่ได้เป็น darkMode ก็จะสลับเป็น lightMode
    lightMode();
}

switchLight.addEventListener("click", () => { //คลิกปุ่มแล้วจะสลับเป็น lightMode และเก็บค่าใน localStorage
    lightMode();
    localStorage.setItem("theme", "light");
});

switchDark.addEventListener("click", () => { //คลิกปุ่มแล้วจะสลับเป็น darkMode และเก็บค่าใน localStorage
    darkMode();
    localStorage.setItem("theme", "dark");
});
