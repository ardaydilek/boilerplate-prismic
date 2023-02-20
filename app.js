require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const prismicH = require('@prismicio/helpers')
const client = require('./config/prismicConfig.js')

app.use((req, res, next) => {
  res.locals.ctx = {
    prismicH
  }
  next()
})

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('pages/home')
})

app.get('/about', async(req, res) => {
  const document = await client.getSingle('about') // write what you have in prismis
  res.render('pages/about', {results: document.data})
})

app.get('/collections', (req, res) => {
  res.render('pages/collections')
})

app.get('detail/:productId', (req, res) => {
  res.render('pages/detail')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
