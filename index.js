/* eslint-disable no-console */
const express = require('express')
const app = express()

const showData = require('./showdata')

// setup port
app.listen(1337, () => {
  console.log('Server is up!')
})

// setting up home
app.get('/', (req, res) => {
  res.render('index', { showData })
})


