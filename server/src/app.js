const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const os = require('os')
const api = require('./routes/api')

const app = express();

app.use(cors());
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.use('/v1', api)

app.get('/', (req, res) => {
    
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;