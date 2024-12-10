'use strict';

const body = document.querySelector('body')
body.style = 'background:black; color: white; font-family: monospace;'

const projectContainer = document.getElementById("page");

let productArray = [];

function updateProductArray() {
  if (JSON.parse(localStorage.getItem("Products")) == null) {
    productArray = [];
  } else {
    productArray = JSON.parse(localStorage.getItem("Products"));
  }
}
updateProductArray();


function updateLocalStorage() {
  localStorage.setItem("Products", JSON.stringify(productArray));
}

// make form & add to html
const form = document.createElement("form");
form.style = "display:flex;";
projectContainer.append(form);

// fieldset in form
const formFieldset = document.createElement("fieldset");
formFieldset.style = "width:50%;";
form.appendChild(formFieldset);

// containers for inputs and labels
const productIdContainer = document.createElement("div");
productIdContainer.style = "width: 100%;";
formFieldset.appendChild(productIdContainer);

const productNameContainer = document.createElement("div");
productNameContainer.style = "width: 100%;";
formFieldset.appendChild(productNameContainer);

const productQuantityContainer = document.createElement("div");
productQuantityContainer.style = "width: 100%;";
formFieldset.appendChild(productQuantityContainer);


// Table for products
let productList = document.getElementById("product-list");
productList = document.createElement("table");
productList.setAttribute("id", "product-list");
formFieldset.insertAdjacentElement("beforeend", productList);
productList.style = "width:100%;";

// web product list display
function displayProducts() {
  const products = JSON.parse(localStorage.getItem("Products")) || [];
  let productList = document.getElementById("product-list");

  // Clear list
  productList.innerHTML = "";
  // Fill list
  const productDisplayHeadRow = document.createElement("tr");
  productList.appendChild(productDisplayHeadRow);
  for (let i = 0; i <= 2; i++) {
    productDisplayHeadRow.appendChild(document.createElement("th"));
  }
  productDisplayHeadRow.getElementsByTagName("th")[0].innerHTML = "ID";
  productDisplayHeadRow.getElementsByTagName("th")[1].innerHTML = "Name";
  productDisplayHeadRow.getElementsByTagName("th")[2].innerHTML = "Quantity";

  products.forEach((product) => {
    const selector = [
      `${product.id}`,
      `${product.name}`,
      `${product.quantity}`,
    ];
    const productListRow = document.createElement("tr");
    productList.appendChild(productListRow);
    for (let i = 0; i < 3; i++) {
      const item = document.createElement("td");
      item.style = "text-align:center;";
      item.textContent = `${selector[i]}`;
      productListRow.appendChild(item);
    }
  });
}
displayProducts();

// function to check for duplicates of input ID with localstorage IDs
function checkDuplicate(idCheck) {
  for (let i in JSON.parse(localStorage.getItem("Products"))) {
    if (JSON.parse(localStorage.getItem("Products"))[i].id == idCheck)
      return true;
  }
  return false;
}

///////////////////////////// buttons

//// Add button
const addButton = document.createElement("button");
addButton.innerHTML = "Add new item";

addButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    !productIdInput.value ||
    !productNameInput.value ||
    !productQuantityInput.value ||
    productQuantityInput.value <= 0 ||
    productIdInput.value <= 0
  ) {
    alert("Please enter valid inputs.");
    return;
  }

  if (!checkDuplicate(productIdInput.value)) {
    const newItem = {
      id: `${productIdInput.value}`,
      name: `${productNameInput.value}`,
      quantity: `${productQuantityInput.value}`,
    };
    console.log(newItem);
    productArray.push(newItem);
    updateLocalStorage();
    updateProductArray();
    displayProducts();
  } else alert("Id already exists");
});

//// Edit button
const editButton = document.createElement("button");
editButton.innerHTML = "Edit existing item";

editButton.addEventListener("click", (e) => {
  e.preventDefault();
  const id = productIdInput.value;
  const name = productNameInput.value;
  const quantity = productQuantityInput.value;

  const products = JSON.parse(localStorage.getItem("Products")) || [];
  const productIndex = products.findIndex((product) => product.id == id);

  if (productIndex > -1) {
    products[productIndex] = { id, name, quantity: parseInt(quantity, 10) };
    localStorage.setItem("Products", JSON.stringify(products));
    displayProducts();
    console.log(document.getElementById(`${id}`))
    alert("Product updated successfully!");
    if (checkFinder(productIdInput)){
      console.log("REPEAT")
      for (let i=1;i<productFindTable.getElementsByTagName('tr').length;i++){
        console.log(productFindTable.getElementsByTagName('tr').length)
        if (productFindTable.getElementsByTagName('tr')[i].id==productIdInput.value){
          const chEl = productFindTable.getElementsByTagName('tr')[i]
          chEl.getElementsByTagName('td')[1].innerText = `${productNameInput.value}`
          chEl.getElementsByTagName('td')[2].innerText = `${productQuantityInput.value}`
        }
      }
      
    }
  } else {
    alert("Product not found.");
  }
});

//// REmove button
const removeButton = document.createElement("button");
removeButton.innerHTML = "Remove existing item";

removeButton.addEventListener("click", (e) => {
  e.preventDefault();
  const id = productIdInput.value;

  const products = JSON.parse(localStorage.getItem("Products")) || [];
  const updatedProducts = products.filter((product) => product.id != id);

  if (products.length !== updatedProducts.length) {
    localStorage.setItem("Products", JSON.stringify(updatedProducts));
    productArray = updatedProducts;
    alert("Product removed successfully!");
    displayProducts();
    updateProductArray();
    while (productIdInput.value) {
      console.log("REMOVE");
      const elToRemove = document.getElementById(`${productIdInput.value}`);
      elToRemove.remove();
    }
  } else {
    alert("Product not found.");
  }
});

// button container
const ButtonContainer = document.createElement("div");
ButtonContainer.style =
  "display:flex; justify-content: space-between; padding: 1%;";
form
  .getElementsByTagName("table")[0]
  .insertAdjacentElement("beforebegin", ButtonContainer);
ButtonContainer.appendChild(addButton);
ButtonContainer.appendChild(editButton);
ButtonContainer.appendChild(removeButton);

/// ID input
const productIdLabel = document.createElement("label");
productIdLabel.setAttribute("for", "productIdInput");
productIdLabel.innerHTML = "Product id";
productIdContainer.appendChild(productIdLabel);

const productIdInput = document.createElement("input");
productIdInput.setAttribute("type", "number");
productIdInput.setAttribute("id", "productIdInput");
productIdInput.required = true;
productIdInput.style = "width: 100%;";
productIdContainer.appendChild(productIdInput);
/// NAME input
const productNameLabel = document.createElement("label");
productNameLabel.innerHTML = "Product name";
productNameLabel.setAttribute("for", "productNameInput");
productNameContainer.appendChild(productNameLabel);

const productNameInput = document.createElement("input");
productNameInput.setAttribute("type", "text");
productNameInput.setAttribute("id", "productNameInput");
productNameInput.required = true;
productNameInput.style = "width: 100%;";
productNameContainer.appendChild(productNameInput);
/// QUANTITY input
const productQuantityLabel = document.createElement("label");
productQuantityLabel.setAttribute("for", "productQuantityInput");
productQuantityLabel.innerHTML = "Product Quantity";
productQuantityContainer.appendChild(productQuantityLabel);

const productQuantityInput = document.createElement("input");
productQuantityInput.setAttribute("type", "number");
productQuantityInput.setAttribute("id", "productQuantityInput");
productQuantityInput.required = true;
productQuantityInput.style = "width: 100%;";
productQuantityContainer.appendChild(productQuantityInput);

/////  product Find field
const productFindFieldset = document.createElement("fieldset");
productFindFieldset.style = "width:50%;";
form.appendChild(productFindFieldset);

const productFindLabel = document.createElement("label");
productFindLabel.setAttribute("for", "productFindInput");
productFindLabel.innerHTML = "Find product by ID";
productFindLabel.style = "display:block;";

const productFindInput = document.createElement("input");
productFindInput.setAttribute("type", "number");
productFindInput.setAttribute("id", "productFindInput");
productFindInput.required = true;

const productFindButton = document.createElement("button");
productFindButton.innerHTML = "Search";

productFindFieldset.append(
  productFindLabel,
  productFindInput,
  productFindButton
);
// product find table and headers
const productFindTable = document.createElement("table");
const productFindTableRow = document.createElement("tr");
productFindFieldset.appendChild(productFindTable);
productFindTable.appendChild(productFindTableRow);

for (let i = 0; i <= 2; i++) {
  productFindTableRow.append(document.createElement("th"));
  productFindTableRow.getElementsByTagName("th")[i].style = "border:1px solid;";
}

productFindTableRow.getElementsByTagName("th")[0].innerHTML = "Product ID";
productFindTableRow.getElementsByTagName("th")[1].innerHTML = "Product Name";
productFindTableRow.getElementsByTagName("th")[2].innerHTML = "Product Quantity";


// function to check for found product duplicates
function checkFinder(id){
  for (let i=1;i<productFindTable.getElementsByTagName('tr').length;i++){
    console.log(productFindTable.getElementsByTagName('tr').length)
    if (productFindTable.getElementsByTagName('tr')[i].id==productFindInput.value){
      return true
    }
  }
}

// add product info to find table
productFindButton.addEventListener("click", (e) => {
  e.preventDefault();
  displayProducts();
  updateProductArray();

  if (checkDuplicate(productFindInput.value) && !checkFinder(productFindInput.value)){

    const foundItemTR = document.createElement("tr");
    productFindTable.appendChild(foundItemTR);
    foundItemTR.setAttribute("id", `${productFindInput.value}`);

    for (let z = 0; z < productArray.length; z++) {
      if (productArray[z].id == productFindInput.value) {
        Object.entries(productArray[z]).forEach(([key, val]) => {
          const foundItemTD = document.createElement("td");
          foundItemTD.innerHTML = `${val}`;
          foundItemTR.appendChild(foundItemTD);
        });
      }
    }
  } else alert("No");
});
