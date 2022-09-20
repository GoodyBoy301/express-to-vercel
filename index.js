const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
})
app.get('/goody', (req, res) => {
    res.send('working perfectly, Goody');
})

app.listen(process.env.PORT || 3000);

module.exports = app;
