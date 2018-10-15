const routes = require('next-routes')


module.exports = routes()
  .add('home', '/', 'home') // home
  .add('media', '/media', 'media') // special
  .add('users', '/users', 'users') // institutional
  .add('category', '/:category', 'category') // category
  .add('post', '/:category/:post', 'post') // post


