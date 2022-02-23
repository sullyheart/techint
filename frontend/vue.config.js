module.exports = {
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    public: '0.0.0.0:80',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'curl "https://api.example.com/socket.io/?EIO=4&transport=polling"X-Requested-With, content-type, Authorization',
    },
  },
  lintOnSave: false,
}