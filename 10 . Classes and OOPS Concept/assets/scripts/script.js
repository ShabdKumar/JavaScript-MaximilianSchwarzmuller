class Vehicle {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
}

class Car extends Vehicle {
  constructor(model, price, topSpeed) {
    super(model, price);
    this.topSpeed = topSpeed;
  }
}

const porsche = new Car("Porsche Spyder 911", "2.5Cr.", "350kmph");
console.log(porsche instanceof Car);

console.log(Object.getOwnPropertyDescriptors(porsche));

Object.defineProperty(porsche, "model", { writable: false });

console.log(porsche);
porsche.model = "BMW";
console.log(porsche);
