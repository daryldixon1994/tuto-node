const http = require("http");

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url === "/") {
        res.end("welcome to home page");
    }
    if (req.url === "/about") {
        res.end("welcome to about page");
    }
    res.end(`
    <h1>error</h1>
    `);
});
server.listen(5000, () => {
    console.log("server up and running");
});
