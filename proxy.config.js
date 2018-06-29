const proxy = [
  {
    context: '/api',
    target: 'http://localhost:8765',
    pathRewrite: {'^/api' : ''}
  }
];

module.exports = proxy;
