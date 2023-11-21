class Calculator {
  constructor() {
    this.result = 0;
  }
  add = (num) => {
    this.result += num;
  };
  subtract = (num) => {
    this.result = this.result - num;
  };
  multiply = (num) => {
    this.result *= num;
  };
  divide = (num) => {
    if (num === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    this.result = this.result / num;
  };
  getResult = () => {
    return this.result;
  };
  clear = () => {
    this.result = 0;
  };
  calculate = (exp) => {
    if (exp.includes("/ 0")) {
      throw new Error("Division by zero is not allowed.");
    }
    this.result = eval(exp);
  };
}

module.exports = Calculator;
