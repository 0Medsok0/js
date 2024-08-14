
let operation = prompt(
  "Choose operation: 1 - Add, 2 - Subtract, 3 - Multiply, 4 - Divide, 5 - Square root, 6 - Exponent, \
  7 - abs, 8 - acos, 9 - acosh, 10 - asin, 11 - asinh, 12 - atan, 13 - atan2, 14 - atanh, \
  15 - cbrt, 16-ceil, 17 - clz32, 18 - cos, 19 - cosh, 20 - floor, 21 - fround, \
  22 - hypot, 23 - imul,24 - log, 25 - log10, 26 - log1p, 27 - log2, 28 - max, \
  29 - min, 30 - rand,31 - round, 32 - sign, 33 - sin, 34-sinh, 35 - tan, \
  36 - tanh, 37 - trunc"
);

let calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
  squareRoot(a) {
    return Math.sqrt(a);
  },
  exponent(a, b) {
    return Math.pow(a, b);
  },
  abs(a) {
    return Math.abs(a);
  },
  acos(a) {
    return Math.acos(a);
  },
  acosh(a) {
    return Math.acosh(a);
  },
  asin(a) {
    return Math.asin(a);
  },
  asinh(a) {
    return Math.asinh(a);
  },
  atan(a) {
    return Math.atan(a);
  },
  atan2(a) {
    return Math.atan2(a);
  },
  atanh(a) {
    return Math.atanh(a);
  },
  cbrt(a) {
    return Math.cbrt(a);
  },
  ceil(a) {
    return Math.ceil(a);
  },
  clz32(a) {
    return Math.clz32(a);
  },
  cos(a) {
    return Math.cos(a);
  },
  cosh(a) {
    return Math.cosh(a);
  },
  floor(a) {
    return Math.floor(a);
  },
  fround(a) {
    return Math.fround(a);
  },
  hypot(a, b) {
    return Math.hypot(a, b);
  },
  imul(a, b) {
    return Math.imul(a, b);
  },
  log(a) {
    return Math.log(a);
  },
  log10(a) {
    return Math.log10(a);
  },
  log1p(a) {
    return Math.log1p(a);
  },
  log2(a) {
    return Math.log2(a);
  },
  max(a, b) {
    return Math.max(a, b);
  },
  min(a, b) {
    return Math.min(a, b);
  },
  rand(a) {
    return Math.random(a);
  },
  round(a) {
    return Math.round(a);
  },
  sign(a) {
    return Math.sign(a);
  },
  sin(a) {
    return Math.sin(a);
  },
  sinh(a) {
    return Math.sinh(a);
  },
  tan(a) {
    return Math.tan(a);
  },
  tanh(a) {
    return Math.tanh(a);
  },
  trunc(a) {
    return Math.trunc(a);
  },
};

let a = +prompt("Enter first number", 0);
let b = +prompt("Enter second number", 0);

if (operation === "1") {
  alert(`Result: ${calculator.add(a, b)}`);
} else if (operation === "2") {
  alert(`Result: ${calculator.subtract(a, b)}`);
} else if (operation === "3") {
  alert(`Result: ${calculator.multiply(a, b)}`);
} else if (operation === "4") {
  alert(`Result: ${calculator.divide(a, b)}`);
} else if (operation === "5") {
  alert(`Result: ${calculator.squareRoot(a)}`);
} else if (operation === "6") {
  alert(`Result: ${calculator.exponent(a)}`);
} else if (operation === "7") {
  alert(`Result: ${calculator.abs(a)}`);
}else if (operation === "8") {
  alert(`Result: ${calculator.acos(a)}`);
}else if (operation === "9") {
  alert(`Result: ${calculator.acosh(a)}`); 
}else if (operation === "10") {
  alert(`Result: ${calculator.asin(a)}`);
}else if (operation === "11") {
  alert(`Result: ${calculator.asinh(a)}`);
}else if (operation === "12") {
  alert(`Result: ${calculator.atan(a)}`);
}else if (operation === "13") {
  alert(`Result: ${calculator.atan2(a)}`);
}else if (operation === "14") {
  alert(`Result: ${calculator.atanh(a)}`);
}else if (operation === "15") {
  alert(`Result: ${calculator.cbrt(a)}`); 
}else if (operation === "16") {
  alert(`Result: ${calculator.ceil(a)}`);
}else if (operation === "17") {
  alert(`Result: ${calculator.clz32(a)}`);
}else if (operation === "18") {
  alert(`Result: ${calculator.cos(a)}`);
}else if (operation === "19") {
  alert(`Result: ${calculator.cosh(a)}`);
}else if (operation === "20") {
  alert(`Result: ${calculator.floor(a)}`);
}else if (operation === "21") {
  alert(`Result: ${calculator.fround(a)}`); 
}else if (operation === "22") {
  alert(`Result: ${calculator.hypot(a, b)}`);
}else if (operation === "23") {
  alert(`Result: ${calculator.imul(a, b)}`);
}else if (operation === "24") {
  alert(`Result: ${calculator.log(a)}`);
}else if (operation === "25") {
  alert(`Result: ${calculator.log10(a)}`);
}else if (operation === "26") {
  alert(`Result: ${calculator.log1p(a)}`);
}else if (operation === "27") {
  alert(`Result: ${calculator.log2(a)}`);
}else if (operation === "28") {
  alert(`Result: ${calculator.max(a, b)}`);
}else if (operation === "29") {
  alert(`Result: ${calculator.mix(a, b)}`);
}else if (operation === "30") {
  alert(`Result: ${calculator.rand(a)}`); 
}else if (operation === "31") {
  alert(`Result: ${calculator.round(a)}`);
}else if (operation === "32") {
  alert(`Result: ${calculator.sign(a)}`);
}else if (operation === "33") {
  alert(`Result: ${calculator.sin(a)}`);
}else if (operation === "34") {
  alert(`Result: ${calculator.sinh(a)}`);
}else if (operation === "35") {
  alert(`Result: ${calculator.tan(a)}`);
}else if (operation === "36") {
  alert(`Result: ${calculator.tanh(a)}`);
}else if (operation === "37") {
  alert(`Result: ${calculator.trunc(a)}`);
}else {
  alert("Invalid operation");
};
