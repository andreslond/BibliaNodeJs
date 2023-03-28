const Emitter = require("./emitter");

const emitter = new Emitter();

emitter.on("save", () => {
  console.log("On save activated 1");
});

emitter.on("save", () => {
  console.log("On save activated 2");
});

emitter.on("new", () => {
    console.log("On new");
  });

emitter.emit("new");
emitter.emit("save");
