const main = `${process.env.WEBSITE}/wp-json/wp/v2`

const api = {
  users: `${main}/users`,
  getUser: id => `${main}/users/${id}`,

  posts: `${main}/posts`,
  getPost: id => `${main}/posts/${id}`,
  getPostsByCategoryId: categoryId => `${main}/posts/?categories=${categoryId}`,
  categories: `${main}/categories`,
  getCategory: id => `${main}/categories/${id}`,
  getCategoryBySlug: slug => `${main}/categories/?slug=${slug}`,

  media: `${main}/media`,
}


export default api