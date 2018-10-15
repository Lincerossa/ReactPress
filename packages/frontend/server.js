const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)

const express = require('express')

app.prepare().then(() => {

  const server = express()

  server.get('*', (req, res) => {
    return handler(req, res);
  });

  server.listen(3000)
})