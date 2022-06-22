const http = require("http");
const httpserver = http.createServer();
httpserver.on("listening", () => {
    console.log(`Listening on port `)
})

httpserver.listen();
