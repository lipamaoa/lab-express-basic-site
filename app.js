const express = require('express');
const { request } = require('http');
const app = express();

app.use(express.static('public'));

app.get('/home', (request, responde, next) => {
    console.log(request);
    responde.sendFile(__dirname + '/views/home.html');
        });
    
app.listen(3000, () => console.log('My first app listening on port 3000!'));

app.get('/about', (request, responde, next) => {
    console.log(request);
    responde.sendFile(__dirname + '/views/about.html')
});

app.get('/works', (request, responde, next) => {
    console.log(request);
    responde.sendFile(__dirname + '/views/works.html')
});

app.get('/photo-galery', (request, responde, next) => {
    console.log(request);
    responde.sendFile(__dirname + '/views/photo-galery.html')
});