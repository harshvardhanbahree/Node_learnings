// Function that takes a function as an arguments is called high order callback function

function add(a, b, cb) {
  const result = a + b;
  cb(result);
}
add(2, 4, function (val) {
  console.info(val);
});
