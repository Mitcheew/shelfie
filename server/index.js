require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const controller = require(__dirname + '/controller');
const massive = require('massive');
const port = process.env.serverPort;

const app = express();
app.use(express.static('../src'))

// app.use(express.static('../public/src'))
app.use(bodyParser.json());
app.use((req, res, next) => {
    next();
})

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance);
        console.log('Connected to the DB')
    })
    .catch((err) => {
        console.log(err)
    })

    app.get('/api/inventory/', controller.read)
    app.post('/api/inventory/', controller.create)
    app.put('/api/inventory/:id', controller.update)
    app.delete('/api/inventory/:id', controller.delete)

app.listen(port, () => {
    console.log(`Ship docked at port ${port}`)
});