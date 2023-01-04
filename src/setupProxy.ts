const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app: any) => {
  app.use(
    '/proxy',
    createProxyMiddleware({
      target: 'http://3.36.230.165:8080',
      changeOrigin: true,
    })
  );
};
