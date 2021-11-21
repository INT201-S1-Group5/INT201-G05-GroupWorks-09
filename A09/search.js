const search = document.querySelector("#search");
const btnSearch = document.querySelector("#searchBar")
const divProduct = document.getElementById("products");
const findProduct = divProduct.getElementsByClassName("product");

btnSearch.style.visibility = "hidden";

search.addEventListener("click", () => {
    if (btnSearch.style.visibility === "hidden") {
        btnSearch.style.visibility = "visible";
        document.querySelector("#searchBar").innerHTML += `<input type="text" style="margin:10px;" class="form-control mb-2" placeholder="Search..." id="form">`;
        let searchBox = document.getElementById("form");
        searchBox.addEventListener("keyup", () => {
            let input = document.getElementById("form");
            let filter = input.value.toLowerCase().trim();
            for (let i = 0; i < findProduct.length; i++) {
                let searchProduct = findProduct[i].textContent;
                if (searchProduct.toLowerCase().trim().includes(filter)) {
                    findProduct[i].style.display = "";
                } else {
                    findProduct[i].style.display = "none";
                }
            }


        });
    } else {
        document.querySelector("#searchBar").innerHTML = "";
        btnSearch.style.visibility = "hidden";
    }
});
