// header start
let heade = document.querySelector(".head-4");
let toggle = document.getElementById("toggle");

toggle.addEventListener("click", function () {
  heade.classList.toggle("active");
  toggle.classList.toggle("fa-remove");
});

// product
const products = {
  man: [
    { name: "Andhra Chicken Curry", image: "andhra chicken curry.jpg", price: "$50" },
    {
      name: "Chicken Curry",
      image:
        "chicken curry.jpg",
      price: "$60",
    },
    {
      name: "Gravy Chicken",
      image:
        "gravy chicken.jpg",
      price: "$70",
    },
    {
      name: "Chicken Kulambu",
      image:
        "chicken kulambu.jpg",
      price: "$70",
    },
  ],
  woman: [
    {
      name: "Chicken Kabab",
      image:
        "chicken kabab.jpg",
      price: "$40",
    },
    {
      name: "Chicken Kabab Chatni",
      image:
        "chicken kabab chatni.jpg",
      price: "$55",
    },
    {
      name: "Copper Chimney Kabab",
      image:
        "copper chimney kabab.jpg",
      price: "$65",
    },
  ],
  boy: [
    {
      name: "Chicken Kuzhambu",
      image: "Chicken Kuzhambu.jpeg",
      price: "$30",
    },
    {
      name: "Fresh Chicken Curry",
      image:
        "fresh chicken curry.webp",
      price: "$60",
    },
    {
      name: "Chettinad Chicken Curry",
      image:
        "chettinad chicken curry.webp",
      price: "$45",
    },
    {
      name: "Chicken Drumstick",
      image:
        "Chicken Drumstick.jpg",
      price: "$55",
    },
    {
      name: "Crispy Air Fryer Chicken Drumsticks",
      image:
        "Crispy Air Fryer Chicken Drumsticks.png",
      price: "$70",
    },
  ],
  child: [
    {
      name: "Grilled Chicken Wings",
      image:
        "Grilled-Chicken-Wings-1-1.webp",
      price: "$20",
    },
    {
      name: "Grill Chicken Legs Grilled",
      image:
        "grill-chicken-legs-grilled-chicken-legs-bbq-sesame-parsley-tomato-95526623.webp",
      price: "$35",
    },
    {
      name: "Chicken Tikka Masala",
      image:
        "chicken tikka masala.jfif",
      price: "$45",
    },
    {
        name: "Chicken Tikka",
        image:
          "chicken tikka.jfif",
        price: "$45",
      },
  ],
};

// Order Placed Successfully & Cancelled successfully

let order = document.getElementById("btn");
let order1 = document.getElementById("btn-1");
let order2 = document.getElementById("btn-2");
let order3 = document.getElementById("btn-3");
let order4 = document.getElementById("btn-4");
let order5 = document.getElementById("btn-5");
let order6 = document.getElementById("btn-6");
let order7 = document.getElementById("btn-7");
let order8 = document.getElementById("btn-8");
let order9 = document.getElementById("btn-9");

// order
let flag = 0;
order.addEventListener("click", function () {
  if (flag == 0) {
    (order.innerHTML = "Cancel Order"), alert("Your order placed successfully");
    flag = 1;
  } else {
    (order.innerHTML = "Buy Now"), alert("Your order cancelled successfully");
    flag = 0;
  }
});
// order1

let flag1 = 0;
order1.addEventListener("click", function () {
  if (flag1 == 0) {
    (order1.innerHTML = "Cancel Order"),
      alert("Your order placed successfully");
    flag1 = 1;
  } else {
    (order1.innerHTML = "Buy Now"), alert("Your order cancelled successfully");
    flag1 = 0;
  }
});
// order2

let flag2 = 0;
order2.addEventListener("click", function () {
  if (flag2 == 0) {
    (order2.innerHTML = "Cancel Order"),
      alert("Your order placed successfully");
    flag2 = 1;
  } else {
    (order2.innerHTML = "Buy Now"), alert("Your order cancelled successfully");
    flag2 = 0;
  }
});
// order3

let flag3 = 0;
order3.addEventListener("click", function () {
  if (flag3 == 0) {
    (order3.innerHTML = "Cancel Order"),
      alert("Your order placed successfully");
    flag3 = 1;
  } else {
    (order3.innerHTML = "Buy Now"), alert("Your order cancelled successfully");
    flag3 = 0;
  }
});
// order4

let flag4 = 0;
order4.addEventListener("click", function () {
  if (flag4 == 0) {
    (order4.innerHTML = "Cancel Order"),
      alert("Your order placed successfully");
    flag4 = 1;
  } else {
    (order4.innerHTML = "Buy Now"), alert("Your order cancelled successfully");
    flag4 = 0;
  }
});
// order5

let flag5 = 0;
order5.addEventListener("click", function () {
  if (flag5 == 0) {
    (order5.innerHTML = "Cancel Order"),
      alert("Your order placed successfully");
    flag5 = 1;
  } else {
    (order5.innerHTML = "Buy Now"), alert("Your order cancelled successfully");
    flag5 = 0;
  }
});
// order6

let flag6 = 0;
order6.addEventListener("click", function () {
  if (flag6 == 0) {
    (order6.innerHTML = "Cancel Order"),
      alert("Your order placed successfully");
    flag6 = 1;
  } else {
    (order6.innerHTML = "Buy Now"), alert("Your order cancelled successfully");
    flag6 = 0;
  }
});
// order7

let flag7 = 0;
order7.addEventListener("click", function () {
  if (flag7 == 0) {
    (order7.innerHTML = "Cancel Order"),
      alert("Your order placed successfully");
    flag7 = 1;
  } else {
    (order7.innerHTML = "Buy Now"), alert("Your order cancelled successfully");
    flag7 = 0;
  }
});
// order8

let flag8 = 0;
order8.addEventListener("click", function () {
  if (flag8 == 0) {
    (order8.innerHTML = "Cancel Order"),
      alert("Your order placed successfully");
    flag8 = 1;
  } else {
    (order8.innerHTML = "Buy Now"), alert("Your order cancelled successfully");
    flag8 = 0;
  }
});
// order9

let flag9 = 0;
order9.addEventListener("click", function () {
  if (flag9 == 0) {
    (order9.innerHTML = "Cancel Order"),
      alert("Your order placed successfully");
    flag9 = 1;
  } else {
    (order9.innerHTML = "Buy Now"), alert("Your order cancelled successfully");
    flag9 = 0;
  }
});

// product section
function showProducts(category) {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";
  products[category].forEach((product) => {
    const productBox = document.createElement("div");
    productBox.className = "product-boxs";
    productBox.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
    `;
    productContainer.appendChild(productBox);
  });
}