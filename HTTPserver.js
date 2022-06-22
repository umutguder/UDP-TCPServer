const http = require("http");
const httpserver = http.createServer();
httpserver.on("request", (req,res) => res.end("OK"))
httpserver.on("listening", () => {
    console.log(`Listening on port ${httpserver.address().port}`)
})

httpserver.listen();
