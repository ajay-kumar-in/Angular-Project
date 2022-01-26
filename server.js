const express = require('express');

const path = require('path');

const app = express();

app.use(express.static('./dist/ajaytest'));

app.get('/*', (req, res, next)=> {
    res.sendFile('index.html', { root: 'dist/ajaytest/'})
})

port = process.env.PORT || 8080;
app.listen(port);