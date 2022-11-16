let carts = document.getElementsByClassName("addToCart")
console.log(carts);

let products = [
    {
        id: 0,
        name: 'Bread',
        category: 'Pantry',
        price: 1.99,
        tag: 'Bread.jpg',
        salesTax: false,
        inCart: 0
    },
    {
        id: 1,
        name: 'Dog Food',
        category: 'Pet',
        price: 45.00,
        tag: 'DOg.jpg',
        salesTax: true,
        inCart: 0
    },
    {
        id: 2,
        name: 'Ground Pork',
        category: 'Meat',
        price: 14.99,
        tag: 'Beeef.jpg',
        salesTax: false,
        inCart: 0
    },
    {
        id: 3,
        name: 'Milk',
        category: 'Dairy',
        price: 2.99,
        tag: 'ilk.jpg',
        salesTax: false,
        inCart: 0
    },
    {
        id: 4,
        name: 'Eggs',
        category: 'Protein',
        price: 2.59,
        tag: 'Eggs.jpg',
        salesTax: false,
        inCart: 0
    },
    {
        id: 5,
        name: 'Bananas',
        category: 'Produce',
        price: 3.79,
        tag: 'Bana.jpg',
        salesTax: false,
        inCart: 0
    },
    {
        id: 6,
        name: 'Sushi',
        category: 'Protein',
        price: 8.99,
        tag: 'Sush.jpg',
        salesTax: false,
        inCart: 0
    },
    {
        id: 7,
        name: 'Yogurt',
        category: 'Dairy',
        price: 1.06,
        tag: 'Yop.webp',
        salesTax: false,
        inCart: 0
    },
    {
        id: 8,
        name: 'Tofu',
        category: 'Protein',
        price: 2.48,
        tag: 'tofu_image.png',
        salesTax: false,
        inCart: 0
    },
    {
        id: 9,
        name: 'Carrots',
        category: 'Produce',
        price: 0.79,
        tag: 'carrots_image.png',
        salesTax: false,
        inCart: 0
    }

]



for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', (e) => {
        let qty = e.target.parentElement.querySelector("input[type='number']").value
        console.log('clicked');
        cartNumbers(products[i],qty);
        totalCost(products[i]);
        displayCart();
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }

}

function cartNumbers(product,qty) {
    
    // let productNumbers = localStorage.getItem('cartNumbers');
    
    // productNumbers = parseInt(productNumbers);
    
    // if (productNumbers) {
        //     localStorage.setItem('cartNumbers', productNumbers + 1);
        //     document.querySelector('.cart span').textContent = productNumbers + 1;
        // } else {
            //     localStorage.setItem('cartNumbers', 1);
            //     document.querySelector('.cart span').textContent = 1;
    // }
    setItems(product,qty);
    let cartItems = JSON.parse(localStorage.getItem("productsInCart"))
    let temp = 0;
    Object.values(cartItems).map(item => {
        temp += Number(item.inCart)
    })
    document.querySelector('.cart span').textContent = temp;
    localStorage.setItem('cartNumbers', temp);

}

function setItems(product,qty) {
    let cartItems = localStorage.getItem('productsInCart');
    console.log("My cartItems are (beofre parse)", cartItems);

    cartItems = JSON.parse(cartItems);
    console.log("My cartItems are", cartItems);
    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart = qty;
    } else {
        product.inCart = qty;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    // console.log("AAA The product price is", product.price);
    // let cartCost = localStorage.getItem('totalCost');

    // console.log("AAA My cartCost is", cartCost);
    // console.log(typeof cartCost);
    // if (cartCost != null) {
    //     console.log('AAA 1')
    //     cartCost = parseFloat(cartCost);
    //     localStorage.setItem("totalCost", cartCost + product.price);
    // } else {
    //     console.log('AAA 2')
    //     localStorage.setItem("totalCost", product.price);
    // }

    // cartCost = localStorage.getItem('totalCost');

    // console.log("AAA2 My cartCost is", cartCost);
    let cartItems = JSON.parse(localStorage.getItem("productsInCart"))
    let temp = 0;
    Object.values(cartItems).map(item => {
        temp += Number((item.inCart * item.price))
    })
    localStorage.setItem('totalCost', temp);
}

function updateCart(btn){
    let qty = btn.parentElement.querySelector("input[type='number']").value
    let productId = btn.dataset.targetproduct
    console.log('clicked');
        cartNumbers(products[productId],qty);
        totalCost(products[productId]);
        displayCart();
}
function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector("#shopping-cart-card");
    console.log(cartItems)
    let cartCost = localStorage.getItem('totalCost');
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
         <div class="product">
        
         <img src="images/${item.tag}">
         <span>${item.name}</span>
         <input type="number" value="${item.inCart}" />
         <input type="button" value="update cart" onclick="updateCart(this)" data-targetproduct="${item.id}"/>
         </div>
    
         <div class="total">$${(item.inCart * item.price).toFixed(2)}</div>
         `
        });

        productContainer.innerHTML += `
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
        Basket Total
        </h4>
        <h4 class="basketTotal">
        $${Number(cartCost).toFixed(2)}
        </h4>
        `

    }

}



displayCart()

onLoadCartNumbers();
//  <img class="closeIcon" src="images/cancel_1.png">
    //  <div class="price">$${item.price}</div>
        //  <div class="quantity"><img class="leftArrow" src="images/leftarrow.jpeg"><span>${item.inCart}</span><img class="rightArrow" src="images/rightarrow.jpeg"></div>