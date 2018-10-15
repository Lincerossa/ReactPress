const main = `${process.env.WEBSITE}/wp-json/wp/v2`

const api = {
  main,
  users: `${main}/users`,
  media: `${main}/media`,
  authors: `${main}/users`,
  getAuthor: id =>`${main}/users/${id}`,
}

export default api