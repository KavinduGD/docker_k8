const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/hello" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Hello from the /hello endpoint",
      }),
    );
    return;
  }

  // Default route
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Welcome to the Node.js server\n");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
