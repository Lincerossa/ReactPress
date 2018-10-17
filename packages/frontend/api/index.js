const main = `${process.env.WEBSITE}/wp-json/wp/v2`

const retrieveQuery = (parameters) => {
  const { id, categories, slug } = parameters || {}
  return [
    id && `/${id}`,
    categories && `?categories=${categories}`,
    slug && `?slug=${slug}`,
  ].join('')
}

const retrieveApi = (resource, parameters) => `${main}/${resource}/${retrieveQuery(parameters)}`

const api = {
  getUsers: parameters => retrieveApi('users', parameters),
  getPosts: parameters => retrieveApi('posts', parameters),
  getCategories: parameters => retrieveApi('categories', parameters),
  getMedia: parameters => retrieveApi('media', parameters),
  getMenus: `${process.env.WEBSITE}/wp-json/wp-api-menus/v2/menus/`
}

module.exports = api
