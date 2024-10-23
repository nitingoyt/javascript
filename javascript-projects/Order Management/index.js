// gettting actual price
function getActualPrice() {
  return this.qty * this.price;
}

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

let userOrderList = {};
let selectedItems = "";
let billAmount = 0;
let productList = document.getElementById("productSelect");
let priceDisplay = document.getElementById("priceDisplay");
let totalQty = document.getElementById("qtyInput");
let priceTotalDisplay = document.getElementById("totalDisplay");
let addItems = document.getElementById("addButton");
let getTable = document.getElementById("table-list");
let subTotalCell = document.getElementById("Sub-Total");

function executeItems() {
  for (const key in productData) {
    let opt = document.createElement("option");
    opt.setAttribute("value", key);
    opt.innerText = productData[key].name;
    productList.appendChild(opt);
  }
}

// Showing the price
productList.addEventListener("change", showPrice);
function showPrice(e) {
  priceDisplay.innerText = productData[e.target.value].price;
  priceTotalDisplay.innerText = getActualPrice.bind(productData[e.target.value])();
  selectedItems = e.target.value;
}

// item prices times qty display  means subtotal
totalQty.addEventListener("keydown", totalDisplay);
function totalDisplay(e) {
  if (e.target.value < 0 || e.target.value > 10) {
    e.target.value = 1;
  }
  productData[selectedItems].qty = e.target.value;
  priceTotalDisplay.innerText = getActualPrice.bind(productData[selectedItems])();
}

// adding items
addItems.addEventListener("click", addHandler);

function addHandler(e) {
  if (selectedItems.trim() == "") {
    alert("Please add atleast one item");
    return;
  }
  
  const product = productData[selectedItems];
  let listCount = 0;
  
  let newRow = document.createElement("tr");
  newRow.setAttribute("id", listCount);

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

  let action = document.createElement("td");
  newRow.appendChild(action);

 
  billAmount += getActualPrice.bind(productData[selectedItems])();
  subTotalCell.innerText = billAmount;


  let deleteCell = document.createElement("button");
  deleteCell.innerText = "Delete";
  deleteCell.setAttribute("id", listCount);
  action.appendChild(deleteCell);

  listCount++;
  getTable.appendChild(newRow);

  deleteCell.addEventListener("click", removeItemFromBill);

  totalQty.value = 1;
  selectedItems = "";
  productList.value = "none";
  priceDisplay.innerText = 0;
  priceTotalDisplay.innerText = 0;
}

executeItems();

function removeItemFromBill(e) {
  const itemId = e.target.id;
  console.log(getTable.childNodes);
  let childNode;

  getTable.childNodes.forEach((value, index) => {
    
    if (value.id == itemId) {
      console.log(value,'value');

      childNode = value;
      return;
    }
  });
  const price = childNode.childNodes[3].innerText;


  console.log(price , billAmount);
  
billAmount = billAmount-price
  getTable.removeChild(childNode);

  console.log(price , billAmount);
  subTotalCell.innerText = billAmount;

}


