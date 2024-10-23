// Function to calculate the actual price based on quantity and price
function getActualPrice() {
  return this.qty * this.price;
}

// Object containing product data for various menu items
const productData = {
  Burger: {
    name: "Cheese Burger",
    price: 5,
    qty: 1,
  },
  Pizza: {
    name: "Pepperoni Pizza",
    price: 12,
    qty: 1,
  },
  Pasta: {
    name: "Creamy Alfredo Pasta",
    price: 8,
    qty: 1,
  },
  Fries: {
    name: "Crispy French Fries",
    price: 3,
    qty: 1,
  },
  Soda: {
    name: "Coke",
    price: 2,
    qty: 1,
  },
  Salad: {
    name: "Caesar Salad",
    price: 7,
    qty: 1,
  },
  Sandwich: {
    name: "Chicken Sandwich",
    price: 6,
    qty: 1,
  },
  Hotdog: {
    name: "Classic Hotdog",
    price: 4,
    qty: 1,
  },
};

let userOrderList = {}; // Stores user-selected items
let selectedItems = ""; // Tracks the selected product

// Grabbing HTML elements by their IDs
let productList = document.getElementById("productSelect");
let priceDisplay = document.getElementById("priceDisplay");
let totalQty = document.getElementById("qtyInput");
let priceTotalDisplay = document.getElementById("totalDisplay");
let addItems = document.getElementById("addButton");
let getTable = document.getElementById("table-list");

// Populate the dropdown menu with product items
function executeItems() {
  for (const key in productData) {
    let opt = document.createElement("option");
    opt.setAttribute("value", key);
    opt.innerText = productData[key].name;
    productList.appendChild(opt);
  }
}

// Update price display when a product is selected
productList.addEventListener("change", showPrice);

function showPrice(e) {
  priceDisplay.innerText = productData[e.target.value].price;
  priceTotalDisplay.innerText = getActualPrice.bind(
    productData[e.target.value]
  )();
  selectedItems = e.target.value;
}

// Update subtotal based on quantity input
totalQty.addEventListener("keyup", totalDisplay);

function totalDisplay(e) {
  // Ensure valid quantity input
  if (e.target.value < 0 || e.target.value > 10) {
    e.target.value = 1;
  }
  productData[selectedItems].qty = e.target.value;
  priceTotalDisplay.innerText = getActualPrice.bind(
    productData[selectedItems]
  )();
}

// Add selected product to the order table
addItems.addEventListener("click", addHandler);

function addHandler(e) {
  // Ensure a product is selected
  if (selectedItems.trim() == "") {
    alert("Please add atleast one item");
    return;
  }

  const product = productData[selectedItems];
  let listCount = 0; // Tracks the row count in the table

  // Create a new row for the table
  let newRow = document.createElement("tr");
  newRow.setAttribute("id", listCount);

  // Add product details to the row
  let foodCell = document.createElement("td");
  foodCell.innerText = product.name;
  newRow.appendChild(foodCell);

  let priceCell = document.createElement("td");
  priceCell.innerText = product.price;
  newRow.appendChild(priceCell);

  let qtyCell = document.createElement("td");
  qtyCell.innerText = product.qty;
  newRow.appendChild(qtyCell);

  let totalCell = document.createElement("td");
  totalCell.innerText = getActualPrice.bind(productData[selectedItems])();
  newRow.appendChild(totalCell);

  // Create action cell for deleting items
  let action = document.createElement("td");
  newRow.appendChild(action);

  // Update the subtotal
  let billAmount = 0;
  billAmount += getActualPrice.bind(productData[selectedItems])();

  let subTotalCell = document.getElementById("Sub-Total");
  subTotalCell.innerText = billAmount;

  // Create delete button
  let deleteCell = document.createElement("button");
  deleteCell.innerText = "Delete";
  deleteCell.setAttribute("id", listCount);
  action.appendChild(deleteCell);

  listCount++;

  // Append new row to the table
  getTable.appendChild(newRow);

  // Add event listener for delete button
  deleteCell.addEventListener("click", removeItemFromBill);

  // Reset quantity, selected item, and display after adding to table
  totalQty.value = 1;
  selectedItems = "";
  productList.value = "none";
  priceDisplay.innerText = 0;
  priceTotalDisplay = 0;
}

// Execute the function to populate dropdown options
executeItems();

// Function to remove item from the bill table
function removeItemFromBill(e) {
  const itemId = e.target.id;
  let childNode;

  // Find the corresponding row by its ID and remove it
  getTable.childNodes.forEach((value, index) => {
    if (value.id == itemId) {
      childNode = value;
      return;
    }
  });

  getTable.removeChild(childNode);
}
