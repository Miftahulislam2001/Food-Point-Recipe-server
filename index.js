const express = require('express')
const app = express();
const Port = 5000;

app.get('/', (req, res)=>{
    res.send('server side Init')
})

app.listen(Port, ()=>{
    console.log(`My Server side Running on Port ${Port}`);
})