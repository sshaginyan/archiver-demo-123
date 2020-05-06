const { Client } = require('pg');

const client = new Client({
    ssl: {
        rejectUnauthorized: false,
    },
    connectionString: process.env.DATABASE_URL
});

client.connect();

client.query('SELECT salesforce.shadow_connect_data("accounta")')
  .then(() => console.log('success'))
  .catch(error => console.error(error.message))
  .finally(() => client.end());
