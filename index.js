const express = require('express')
const app = express();
var cors = require('cors')
const Port = 5000;

app.use(cors());
const chefData = require('./Data/chef.json');

app.get('/', (req, res)=>{
    res.send(chefData)
})
app.get('/:id', (req, res)=>{
    const id = req.params.id;
    const selectedChef = chefData.find(singleChef => singleChef._id === id) || {};
    res.send(selectedChef)
})

app.listen(Port, ()=>{
    console.log(`My Server side Running on Port ${Port}`);
})