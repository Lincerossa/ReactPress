const routes = require('next-routes')


module.exports = routes()
.add('about')
.add('media', '/media', 'media')
.add('users', '/users', 'users')