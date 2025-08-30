function addToCart(name, price) {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  cart.push({ name, price });
  sessionStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart for Rs " + price);
}

function showCart() {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  let tbody = document.getElementById("cartBody");
  if (!tbody) return;
  tbody.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    let row = document.createElement("tr");
    let nameCell = document.createElement("td");
    let priceCell = document.createElement("td");
    nameCell.innerText = item.name;
    priceCell.innerText = item.price;
    row.appendChild(nameCell);
    row.appendChild(priceCell);
    tbody.appendChild(row);
    total += item.price;
  });
  let totalElem = document.getElementById("totalprice");
  totalElem.innerText = "Rs " + total;
}

document.addEventListener("DOMContentLoaded", showCart);
