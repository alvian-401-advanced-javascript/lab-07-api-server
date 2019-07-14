'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

let db = [];

// When does this middleware run?
// What does it do?
app.use(express.json());

// When does this middleware run?
app.use((req, res, next) => {
  console.log('LOG:', req.method, req.path);
  next();
});

// Route to Get All Categories
app.get('/categories', (req, res, next) => {
  let count = db.length;
  let results = db;
  res.json({ count, results });
});

app.get('/categories/:id', (req,res,next) => {
  let id = req.params.id;
  let record = db.filter((record) => record.id === parseInt(id));
  res.json(record[0]);
});

app.post('/categories', (req,res,next) => {
  let {name,author,title,article} = req.body;
  let record = {name,author,title,article};
  record.id = db.length + 1;
  db.push(record);
  res.json(record);
});

app.delete('/categories/:id', (req,res,next) => {
  let id = req.params.id;
  db = db.filter( (record) => record.id !== parseInt(id) );
  res.json({});
});

app.put('/categories/:id', (req,res,next) => {
  let id = req.params.id;
  let {books, sports, food, movies} = req.body;
  let updatedRecord = {books, sports, food, movies};
  db = db.map( (record) => (record.id === parseInt(id)) ? updatedRecord : record );
  res.json(updatedRecord);
});

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

