const express = require('express');
// require animals dataset
const { animals } = require('./data/animals');
const fs = require('fs');
const path = require('path');

// require routes since we mvoed them to a separate file
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;

const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// add routing methods from files we crated
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// declare 'public' folder as a static resource
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, './public/zookeepers.html'));
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});