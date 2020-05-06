const { Client } = require('pg');

const client = new Client({
    ssl: {
        rejectUnauthorized: false,
    },
    connectionString: process.env.DATABASE_URL
});

client.connect();

client.query('CALL salesforce.shadow_connect_data($1)', ['account'])
  .then(() => console.log('success'))
  .catch(error => console.error(error.message))
  .finally(() => client.end());
