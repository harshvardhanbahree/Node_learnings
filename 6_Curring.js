// Currying is useful whee all the arguments are either not present or are coming from different files at different time.

function add(n1) {
  return function (n2) {
    return function (n3) {
      return n1 + n2 + n3;
    };
  };
}

console.info(add(1)(2)(2));
