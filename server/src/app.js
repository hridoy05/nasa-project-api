const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const os = require('os')
const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');

const app = express();

app.use(cors());
app.use(morgan('combined'));
console.log(os.cpus().length);
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.use('/planets', planetsRouter);
app.use('/launches', launchesRouter);

console.log((path.resolve(__dirname, '..', 'public', 'index.html')));
app.get('/', (req, res) => {
    
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;