const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)

const express = require('express')
app.prepare().then(() => {

  const server = express()


  server.get('/', function (req, res) {
    res.send('GET request to the homepage');
  });


  server.use(handler).listen(3000)
})