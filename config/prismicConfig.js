const fetch = require('node-fetch')
const prismic = require('@prismicio/client')
const repoName = process.env.PRISMIC_REPO_NAME
const accessToken = process.env.PRISMIC_ACCESS_TOKEN

// const routes = [
//   {
//     type: 'page',
//     path: '/:uid'
//   }
// ]
const client = prismic.createClient(repoName, {
  fetch,
  accessToken
  // routes
})

module.exports = client
