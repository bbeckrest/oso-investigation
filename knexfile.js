const path = require('path');

module.exports = {
  development: {
    client: 'postgresql',
    migrations: {
      directory: path.join(__dirname, 'src/migrations'),
    },
  },
};
