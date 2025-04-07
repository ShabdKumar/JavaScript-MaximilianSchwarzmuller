class Product {
  // title;
  // imageURL;
  // price;
  // description;

  constructor(title, image, price, desc) {
    this.title = title;
    this.imageURL = image;
    this.price = price;
    this.description = desc;
  }
}

class ElementAttibute {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

class ElementGeneration {
  constructor(elementId, renderItem = true) {
    this.id = elementId;
    if (renderItem) {
      this.render();
    }
  }

  render() {}

  generateElement(elementTag, className, attributes) {
    const newElement = document.createElement(elementTag);
    if (className) {
      newElement.classList.add(className);
    }
    if (attributes && attributes.length > 0) {
      for (const attribute of attributes) {
        newElement.setAttribute(attribute.name, attribute.value);
      }
    }
    document.getElementById(this.id).append(newElement);
    return newElement;
  }
}

class ShoppingCart extends ElementGeneration {
  items = [];

  constructor(elementId) {
    super(elementId, false);
    this.orderButtonHandler = () => {
      console.log("Ordering...");
      console.log(this.items);
    };
    this.render();
  }

  get totalAmount() {
    return this.items.reduce((a, b) => a + b.price, 0);
  }

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total Price: &#8377 ${this.totalAmount}</h2>`;
  }

  addToCart(product) {
    this.updatedItems = [...this.items];
    this.updatedItems.push(product);
    this.cartItems = this.updatedItems;
  }

  render() {
    const cartElement = this.generateElement("section", "cart");
    cartElement.innerHTML = `
      <h2>Total Price: &#8377 ${0}</h2>
      <button type="button">Order Now</button>
    `;
    const orderButton = cartElement.querySelector("Button");
    orderButton.addEventListener("click", this.orderButtonHandler);
    this.totalOutput = cartElement.querySelector("h2");
  }
}

class ProductItem extends ElementGeneration {
  // product;

  constructor(product, elementId) {
    super(elementId, false);
    this.product = product;
    this.render();
  }

  addToCartHandler() {
    App.addToCart(this.product);
  }

  render() {
    const productElement = this.generateElement("li", "product-item");
    productElement.innerHTML = `
      <div class="product-item__content">
        <img src = ${this.product.imageURL} alt = "${this.product.title}">
        <h2>${this.product.title}</h2>
        <h3>&#8377 ${this.product.price}</h3>
        <p>${this.product.description}</p>
        <button type="button">Add to Cart</button>
      </div>
      `;
    const addToCartButton = productElement.querySelector("button");
    addToCartButton.addEventListener("click", this.addToCartHandler.bind(this));
  }
}

class ProductList extends ElementGeneration {
  #products = [
    new Product(
      "Smartphone",
      "https://m.media-amazon.com/images/I/616wnQmPQ-L._SX679_.jpg",
      20000,
      "A smartphone for all your online needs."
    ),
    new Product(
      "Laptop",
      "https://m.media-amazon.com/images/I/61fsBFww9DL._AC_UY327_FMwebp_QL65_.jpg",
      50000,
      "A laptop for all your business work."
    ),
  ];

  constructor(elementId) {
    super(elementId, false);
    this.#products;
    this.render();
  }

  render() {
    this.generateElement("ul", "product_list", [
      new ElementAttibute("id", "prod-list"),
    ]);
    this.#products.forEach((product) => {
      new ProductItem(product, "prod-list");
    });
  }
}

class Shop {
  constructor() {
    this.render();
  }

  render() {
    this.shoppingCart = new ShoppingCart("app");
    new ProductList("app");
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    this.shoppingCart = shop.shoppingCart;
  }

  static addToCart(product) {
    this.shoppingCart.addToCart(product);
  }
}

App.init();
