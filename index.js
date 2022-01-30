const express = require('express');
const upload = require('./upload');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.post('/upload', upload.single('file'), (req, res, next) => {
  if (!req.file) return res.status(400).send('file이 있는지 확인해주세요 ㅅㄱ');
  return res.status(201).json({ file: req.file });
});

app.listen(4444);
