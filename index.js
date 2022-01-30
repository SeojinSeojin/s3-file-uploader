const express = require('express');
const upload = require('./upload');
const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.post('/upload', upload.single('file'), (req, res, next) => {
  console.log(req.file);
  return res.status(201).json({ file: req.file });
});

app.listen(4444);
