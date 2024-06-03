const logger = require("./Modules/logger"); // We set this to const because we don't want to override the value of the logger=1 when using var

function sayHello() {
  console.info("Hello");
  logger.log("blah blad");
}

sayHello();
