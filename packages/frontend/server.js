const next = require('next')
const nodemailer = require('nodemailer')
const axios = require('axios')
const routes = require('./routes')
const api = require('./api')

const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)

const express = require('express')

app.prepare().then(() => {

  const server = express()

  server.post('/email', (req, res) => {

    nodemailer.createTestAccount((err, account) => {
      if (err) {
        console.error('Failed to create a testing account', err);
        return process.exit(1);
      }
      const transporter = nodemailer.createTransport(
        {
          service: 'gmail',
          host: 'gmail.com',
          port: 465,
          secure: true,
          auth: {
            user: process.env.WEBSITE_EMAIL_USER,
            pass: process.env.WEBSITE_EMAIL_PASSWORD,
          },
        },
      );
    
      const message = {
        from: 'Sito Web',
        to: 'marcelloluatti@gmail.com',
        subject: 'prova corpo email',
        html: '<p>corpo email</p>',
      }
    
      transporter.sendMail(message, (error, info) => {
        if (error) {
          console.log('Error occurred', error.message)
          return process.exit(1);
        }
        transporter.close();
      })
    })
    return 'marci'
  })


  server.get('/', async (req, res) => {
    const categories = await axios.get(api.getCategories()).then(x => x.data)
    const posts = await axios.get(api.getPosts()).then(x => x.data)

    return app.render(req, res, '/home', {
      categories,
      posts,
    })
  })

  server.get('/i-nostri-lavori/:category', async (req, res, next) => {
   
    const category = await axios.get(api.getCategories({ slug: req.params.category })).then(x => x.data[0])
    const posts = category && await axios.get(api.getPosts({ categories: category.id })).then(x => x.data)

    if (category) {
      return app.render(req, res, '/category', {
        category,
        posts
      })
    }
    next('route')
  })



  server.get('/i-nostri-lavori/:category/:post', async (req, res, next) => {
    const post = await axios.get(api.getPosts({ slug: req.params.post })).then(x => x.data[0])
    const category = post && await axios.get(api.getCategories({ slug: req.params.category })).then(x => x.data[0])

    if (post && category) {
      return app.render(req, res, '/post', {
        post,
        category,
      })
    }
    next('route')
  })


  server.get('*', (req, res) => {
    return handler(req, res);
  });

  server.listen(3000)
})