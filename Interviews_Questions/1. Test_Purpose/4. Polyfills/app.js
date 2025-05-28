/*         Array.sort()          */
if (!Array.prototype.sort) {
  Array.prototype.sort = function () {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (this[i] > this[j]) {
          let test = this[i];
          this[i] = this[j];
          this[j] = test;
        }
      }
    }
    return this;
  };
}

console.log([10, 23, 5, -7, 20, 3].sort()); // here inbuit method will be called.

// Overwriting sort Method
Array.prototype.sort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] > this[j]) {
        let test = this[i];
        this[i] = this[j];
        this[j] = test;
      }
    }
  }
  return this;
};

console.log([10, 23, 5, -7, 20, 3].sort());

/*         Array.includes()        */
if (!Array.prototype.includes) {
  Array.prototype.includes = function (searchElement) {
    for (let element of this) {
      if (searchElement === element) {
        return true;
      }
    }
    return false;
  };
}

console.log([10, 23, 5, -7, 20, 3].includes(-8)); // inbuilt method

// Overwriting
Array.prototype.includes = function (searchElement) {
  for (let element of this) {
    if (searchElement === element) {
      return true;
    }
  }
  return false;
};

console.log([10, 23, 5, -7, 20, 3].includes(5));

if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement) {
    for (let index = 0; index < this.length; index++) {
      if (searchElement === this[length]) {
        return index;
      }
    }
    return -1;
  };
}
