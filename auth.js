function checkLogin() {
    if (localStorage.getItem("loggedIn") === "true") {
        document.getElementById("login").style.display = "none";
        document.getElementById("adminArea").style.display = "block";
        loadProducts();
    }
}

function login() {
    const pass = document.getElementById("adminPassword").value;
    if (pass === "Rahat132645***") {
        localStorage.setItem("loggedIn", "true");
        checkLogin();
    } else {
        alert("Wrong password!");
    }
}

function addProduct() {
    const product = document.getElementById("newProduct").value;
    if (!product) return;
    let products = JSON.parse(localStorage.getItem("products") || "[]");
    products.push({ name: product });
    localStorage.setItem("products", JSON.stringify(products));
    loadProducts();
}

function loadProducts() {
    let products = JSON.parse(localStorage.getItem("products") || "[]");
    const list = document.getElementById("productList");
    list.innerHTML = "";
    products.forEach(p => {
        const li = document.createElement("li");
        li.textContent = p.name;
        list.appendChild(li);
    });
}
