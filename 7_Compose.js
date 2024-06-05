// Compose

function add(n1, n2) {
  return n1 + n2;
}

function square(res) {
  return res * res;
}

function compose(fun1, fun2) {
  return function (a, b) {
    return fun1(fun2(a, b));
  };
}

const task = compose(add, square);
console.log(task(2, 3));
