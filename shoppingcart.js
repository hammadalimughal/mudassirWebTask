// let removeCartItemsButtons = document.getElementsByClassName("btn-danger");

// for (let i = 0; i < removeCartItemsButtons.length; i++) {
//   let button = removeCartItemsButtons[i];
//   button.addEventListener("click", removeCartItem);
// }

let quantityInputs = document.getElementsByClassName("cart-quantity-input");
for (let i = 0; i < quantityInputs.length; i++) {
  let input = quantityInputs[i];
  input.addEventListener("change", quantityChanged);
}

// function removeCartItem(event){
//     let buttonClicked = event.target;
//     buttonClicked.parentElement.parentElement.remove();
//     updateCartTotal();
//   }

function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value < +0) {
    input.value = 1;
  }
  updateCartTotal();
}

function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName("cart-items")[i];
  let cartRows = cartItemContainer.getElementsByClassName("cart-row");
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];


    let priceElement = cartRow.getElementsByClassName("cart-price")[i];
    let quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[i];


    let price = parseFloat(priceElement.innerText.replace("$", ""));

    let quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}

//cash button
let cash = document.querySelector("#cash");
//credit button
let credit = document.querySelector("#credit");
//cash form
let cashShow = document.querySelector("#cashForm");
//credit form
let creditShow = document.querySelector("#creditForm");
//purchase button
let buy = document.querySelector("#buy");

buy.addEventListener("click", purchase);

buy.addEventListener("click", purchase2);

cash.addEventListener("click", cashButton);

credit.addEventListener("click", creditButton);

cashShow.addEventListener("click", cashButton);

creditShow.addEventListener("click", creditButton);

function cashButton(event) {
  event.preventDefault();
  cashShow.classList.remove("form-check");
  cashShow.appendChild;

  creditShow.classList.add("form-check");
  creditShow.appendChild;
}

function creditButton(event) {
  event.preventDefault();
  creditShow.classList.remove("form-check");
  creditShow.appendChild;

  cashShow.classList.add("form-check");
  cashShow.appendChild;
}

function purchase(event) {
  event.preventDefault();
  let remove = document.getElementById("cash");
  remove.classList.remove("hide");
}

function purchase2(event) {
  event.preventDefault();
  let remove = document.getElementById("credit");
  remove.classList.remove("hide");
}
