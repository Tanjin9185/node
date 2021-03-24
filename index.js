const express = require('express');
const cors = require('cors');       //website a show krte/html r ssate link krte
const bodyParser = require('body-parser');  //get korte
const app = express();

app.use(cors());

// parse application/json
app.use(bodyParser.json());

const rootCall = (req, res) => {
    const fruit = {
        product: 'data',
        price: 220,
    }
    res.send(fruit);
}

app.get('/fruit/banana', (req, res) => {
    res.send({fruit: 'banana', quantity: 1000, price: 10000})
})

const users = ['Tanjin', 'Tuhin', 'Maria', 'Monisa'];


//get
app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.query.sort);    //localhost:3000/user/2?sort=asc  ebave user req dile server {sort: 'asc} pabe
    const name = users[id];
    // console.log(req.params);
    res.send({id, name});
})


//post
app.post('/addUser', (req, res) => {
    console.log('data receive', req);         //data postman r body teke send hoece 
    //sace to database 
    const user = req.body;
    user.id = 55;
    res.send(user);
})


app.get('/', rootCall)

app.listen(3000, () => console.log('Listening to port 3000'));