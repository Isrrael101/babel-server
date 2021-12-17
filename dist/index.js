"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _http = _interopRequireDefault(require("http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PORT = process.env.PORT || 4000;

const server = _http.default.createServer((req, res) => {
  res.end("Hello from the server");
}).listen(PORT, function () {
  console.log("Servidor conectado en el puerto", PORT);
});

var _default = server;
exports.default = _default;