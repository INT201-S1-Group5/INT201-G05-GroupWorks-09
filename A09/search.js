// import product from "./uniqloProduct.js";

const search = document.querySelector("#search");
const btnSearch = document.querySelector("#searchBar")
const searchProduct = document.querySelectorAll("#product");

btnSearch.style.visibility = "hidden";

search.addEventListener("click", () => {
    if (btnSearch.style.visibility === "hidden") {
        btnSearch.style.visibility = "visible";
        document.querySelector("#searchBar").innerHTML += `<input type="text" style="margin:10px;" class="form-control mb-2" placeholder="Search..." id="form">`;
        let searchBox = document.getElementById("form");
        searchBox.addEventListener("keyup", () => {
            // let input = document.getElementById("form");
            // let text = input.target.value.toLowerCase().trim();
            // for (let i = 0; i < searchProduct.length; i++) {
            //     let txtValue = searchProduct[i].getAttribute();
            //     if (txtValue.toLowerCase().trim.includes(text)) {
            //         searchProduct[i].style.display = "";
            //     } else {
            //         searchProduct[i].style.display = "none";
            //     }
            // }
            // let filterName = product.filter((allProduct) => {
            //     return (allProduct.productName.toLowerCase().trim.includes(text))
            // });
            // console.log(filterName);

            // let divProduct = searchProduct.children;

            // if (filterName.length == 0) {
            //     for (const i of divProduct) {
            //         i.style.display = "none";
            //     }
            // } else {
            //     for (const i of divProduct) {
            //         for (const j of filterProductByName) {
            //             if (i.id == j.productId) {
            //                 i.style.display = "flex";
            //                 break;
            //             } else {
            //                 i.style.display = "none";
            //             }
            //         }
            //     }
            // }
            let input = document.getElementById("form");
            let filter = input.value.toLowerCase();
            let divID = document.getElementById("products");
            let divClass = divID.getElementsByClassName("product");
            for (let i = 0; i < divClass.length; i++) {
                let txtValue = divClass[i].textContent;
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                    divClass[i].style.display = "";
                } else {
                    divClass[i].style.display = "none";
                }
            }


        });
    } else {
        document.querySelector("#searchBar").innerHTML = "";
        btnSearch.style.visibility = "hidden";
    }
});