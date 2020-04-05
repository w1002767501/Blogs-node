import Client from 'mysql-pro'

const client = new Client({
  mysql: {
    host: '127.0.0.1',
    port: 3306,
    database: 'mydb1',
    user: 'root',
    password: '12345678',
  },
})

export default client
