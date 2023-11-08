const http = require("http");

const contacts = {
  contacts: [
    {
      name: "John Doe",
      number: "+36501112222",
      isFavorite: false,
    },
    {
      name: "Jane Doe",
      number: "+365022233333",
      isFavorite: true,
    },
    {
      name: "Alice",
      number: "+00143253323",
      isFavorite: true,
    },
  ],
};

const server = http.createServer((req, res) => {
  console.log("method:", req.method);

  console.log("url:", req.url);

  const url = new URL(req.url, "http://localhost:8000");
  //   console.log(url.pathname);

  if (url.pathname === "/contacts") {
    if (req.method === "GET") {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
    }
    res.end(JSON.stringify(contacts));
    return;
  } else if (req.method === "POST") {
    const name = url.searchParams.get("name");
    const number = url.searchParams.get("number");
    contacts.push(name, number, (isFavorite = false));
    res.writeHead(201);
    res.end();
    return;
  }
  res.writeHead(404, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify({ error: "not found" }));
});

server.listen(8000, () => {
  console.log("Server listening.");
});
