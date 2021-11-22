const body = document.querySelector("body")
const switchDark = document.querySelector("#dark");
const switchLight = document.querySelector("#light");
const mode = localStorage.getItem("theme")

function lightMode() {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    switchLight.style.backgroundColor = "#CCCBCB";
    switchDark.style.backgroundColor = "white";
}

function darkMode() {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    switchDark.style.backgroundColor = "#CCCBCB";
    switchLight.style.backgroundColor = "white";
}

if (mode == "dark") {
    darkMode();
} else {
    lightMode();
}

switchLight.addEventListener("click", () => {
    lightMode();
    localStorage.setItem("theme", "light");
});

switchDark.addEventListener("click", () => {
    darkMode();
    localStorage.setItem("theme", "dark");
});
