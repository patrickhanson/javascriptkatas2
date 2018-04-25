addOutput = document.getElementById("add");
function add(x, y) {
    return x + y
}
addOutput.innerHTML = add(2, 4)
console.log("add(2, 4)", add(2, 4))

multiplyOutput = document.getElementById("multiply");
function multiply(x, y) {
    let result = 0;
    for(let i = 1; i <= x; i++) {
        result = add(result, y);
    }
    return result
}
multiplyOutput.innerHTML = multiply(6, 8)
console.log("multipy(6, 8)", multiply(6, 8))

powerOutput = document.getElementById("power");
function power(x, n) {
    let p = 1
    for(var i = 1; i <= n; i++) {
        p = multiply(p, x)
    }
    return p;
}
powerOutput.innerHTML = power(2, 8)
console.log("power(2, 8)", power(2,8))

factorialOutput = document.getElementById("factorial");
function factorial(x) {
    for(var i = x - 1; i >= 1; i--) {
        x = multiply(x, i);
    }
    return x;
}
factorialOutput.innerHTML = factorial(4)
console.log("factorial(4)", factorial(4))

fibonacciOutput = document.getElementById("fibonacci");
function fibonacci(x) {
let a = 0, b = 1, c = 1;
for(var i = 3; i <= x; i++) {
    c = add(a, b);
    a = b;
    b = c;
}
return c
}
fibonacciOutput.innerHTML = fibonacci(8);
console.log("fibonacci(8)", fibonacci(8))