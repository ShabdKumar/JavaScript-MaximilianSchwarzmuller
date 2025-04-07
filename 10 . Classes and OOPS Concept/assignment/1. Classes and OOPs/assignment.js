class Course {
  #price;

  get price() {
    return "$" + this.#price;
  }

  set price(price) {
    if (price < 0) {
      throw "Invalid Price";
    }
    this.#price = price;
  }

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  valueCofCourse() {
    return (this.length / this.#price).toFixed(2);
  }

  descriptionOfCourse() {
    console.log(
      `This course named ${this.title} takes ${
        this.length
      }hrs to be finished and cost is just ${
        this.#price
      }. The value of this course is ${this.valueCofCourse()}.`
    );
  }
}

class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
}

class TheoriticalCourse extends Course {
  publish() {
    console.log("Theoritical Courses Sucks");
  }
}

const math = new Course("Mathematics", "150", 500);
const english = new Course("English", "100", 400);
console.log(math, english);
math.descriptionOfCourse();
english.descriptionOfCourse();

const computerLab = new PracticalCourse("Lab-Analysis", "400", 800, 20);
computerLab.descriptionOfCourse();
const computer = new TheoriticalCourse("C-Programming", "200", 300);
computer.descriptionOfCourse();
computer.publish();
const poems = new TheoriticalCourse("Poems", "100", -700);
