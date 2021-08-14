/* eslint-disable no-console */
const express = require('express')
const app = express()

const showdata = require('./showdata')

// setup port
app.listen(1337, () => {
  console.log('Server is up!')
})

app.set('view engine', 'pug')
app.use(express.static('public'))


// setting up home
app.get('/', (req, res) => {
  res.render('index', { showdata })
})

// getting seasons
app.get('/seasons/:id', (req, res) => {
  const showSeason = showdata.seasons.filter(season => season.number === parseInt(req.params.id))

  res.render('seasons', { showSeason })
})

app.all('*', (req, res) => {
  return res.status(404).send('Negative, Captain')
})


