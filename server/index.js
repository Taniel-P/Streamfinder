const app = require('./app.js');
const config = require('./config/config');

app.listen(config.port, () => {
  console.log(`NSA is listening in on ${process.env.APP_BASE_URL}`);
})

module.exports = app;