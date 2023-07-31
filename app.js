const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  // console.log(req);
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    // res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title> Enter Message </title></head>");
    res.write("<body>");
    // res.write("fs.");
    const data = fs.readFileSync("./message.txt");
    res.write(`<h2>${data}</h2>`);
    res.write(
      "<form action='/message' method='POST'><input type='text' name='message ><button type='submit'>Submit</button></form>"
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  // if (url === "/node") {
  //   // res.setHeader("Content-Type", "text/html");
  //   res.write("<html>");
  //   res.write("<head><title> Learning Node</title></head>");
  //   res.write("<body><h1>Welcome to my Node Js project</h1></body>");
  //   res.write("</html>");
  //   return res.end();
  // }
  // if (url === "/home") {
  //   // res.setHeader("Content-Type", "text/html");
  //   res.write("<html>");
  //   res.write("<head><title>home page</title></head>");
  //   res.write("<body><h1>Welcome home</h1></body>");
  //   res.write("</html>");
  //   return res.end();
  // }
  // if (url === "/about") {
  //   // res.setHeader("Content-Type", "text/html");
  //   res.write("<html>");
  //   res.write("<head><title> About Us </title></head>");
  //   res.write("<body><h1>Welcome to About Us page</h1></body>");
  //   res.write("</html>");
  //   return res.end();
  // }
  // if (url === "/message") {
  //   res.setHeader("Content-Type", "text/html");
  //   res.write("<html>");
  //   res.write("<head><title> your message </title></head>");
  //   res.write("<body><h1>your message here</h1></body>");
  //   res.write("</html>");
  //   return res.end();
  // }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title> welcome Page</title></head>");
  res.write("<body><h1>Welcome</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
