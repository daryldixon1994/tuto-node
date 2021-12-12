//asynchronous way
const { readFile, writeFile } = require("fs");

//read files and write it
// ot requires a callback function
console.log("start");
readFile("./content/first.txt", "utf8", (err, data) => {
    if (err) throw err;
    const first = data;
    readFile("./content/second.txt", "utf-8", (err, data) => {
        if (err) throw err;
        const second = data;
        writeFile(
            "./content/subfolder/async-text.txt",
            `the full async text is ${first}, ${second}`,
            (er, result) => {
                if (err) throw err;
                console.log("done with this task");
            }
        );
    });
});
console.log("start the next one");
