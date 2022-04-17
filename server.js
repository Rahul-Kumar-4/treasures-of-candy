const path = require('path');
const express = require('express');
const hbs = require('hbs');
//const geocode = require('./geo');
//const forecast = require('./forr');
//const search= require('./testing1')
//const psearch =require('./testing')
const app = express()
const port=process.env.PORT ||3000;
// Define paths for Express config
const publicDirectoryPath = path.join(__dirname)
const viewsPath = path.join(__dirname)
const partialsPath = path.join(__dirname)

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Andrew Mead'
    })
})

app.listen(port, () => {
    console.log('Server is up on port 3000.'+port)
})