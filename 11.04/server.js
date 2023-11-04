const http = require("http");

const host = "localhost"; // 127.0.0.1
const port = 8000;

const requestListener = function (request, response) {
  switch (request.url) {
    case "/json":
      response.setHeader("Content-Type", "application/json");
      response.writeHead(200);
      const responseObj = {
        message: "This comes from a JSON object",
      };
      response.end(JSON.stringify(responseObj));
      break;
    case "/html":
      response.setHeader("Content-Type", "text/html");
      response.writeHead(200);
      response.end(`<html><body><h1>This. Is. HTML.</h1></body></html>`);
      break;
    case "/":
      response.setHeader("Content-Type", "application/json");
      response.writeHead(200);
      response.end(`{"age": 29}`);
      break;
    default:
      response.setHeader("Content-Type", "text/html");
      response.writeHead(404);
      response.end(`<html><body><h1>404</h1></body></html>`);
      break;
  }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
