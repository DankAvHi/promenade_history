const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
     app.use(
          "/api",
          createProxyMiddleware({
               target: process.env.HTTPS === "true" ? "https://localhost:8000" : "http://localhost:8000",
               changeOrigin: true,
               secure: false,
          })
     );
};
