//synchronous way
const { readFileSync, writeFileSync } = require("fs");

//read files
console.log("start");
const firstText = readFileSync("./content/first.txt", "utf-8");
const secondText = readFileSync("./content/second.txt", "utf-8");

//write file
writeFileSync(
    "./content/third.txt",
    `the full text is ${firstText},  ${secondText}`
);
console.log("done with this task");
console.log("start next task");
