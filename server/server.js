const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config()

const ctrl = require('./controller')

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    app.listen(PORT, () => { console.log(`${PORT} is ALIVE!!!`) })
}).catch(err => console.log(err));

app.post('/api/products', ctrl.create)

app.get('/api/products', ctrl.getAll);

app.get('/api/products/:id', ctrl.getOne);

app.put('/api/products/:id', ctrl.update);

app.delete('/api/products/:id', ctrl.delete);



const PORT = process.env.PORT;

