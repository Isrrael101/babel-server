import http from "http";

const PORT = process.env.PORT || 4000;

const server = http
  .createServer((req, res) => {
    res.end("Hola mundo desde Heroku");
  })
  .listen(PORT, function() {
  console.log("Servidor conectado en el puerto", PORT)
});

export default server;