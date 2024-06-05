const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("messageLogged", function printMessage() {
  console.info("Warning");
});

emitter.emit("messageLogged");
