const app = require('./app.js');
const {db} = require('./database/database')
// const config = require('./config/config');

app.listen(3000, () => {
  console.log(`NSA is listening in on ${3000}`);
})

module.exports = app;