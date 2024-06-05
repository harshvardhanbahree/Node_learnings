function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doOperation() {
  doStep1(1, (result) => {
    doStep2(result, (result2) => {
      console.info(result2);
    });
  });
}
