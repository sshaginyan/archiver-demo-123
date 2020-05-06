const { Client } = require('pg');

const client = new Client({
  ssl: {
    rejectUnauthorized: false,
  },
  connection: process.env.DATABASE_URL
});

console.log('Starting');

client.connect();

client.query('SELECT salesforce.transfer()')
  .then(() => console.log('success'))
  .catch(error => console.error(error.message))
  .finaly(() => client.end());
