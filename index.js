const express = require('express');
const upload = require('./upload');
const app = express();
const cors = require('cors');
const getPresignedUrl = require('./getPresignedUrl');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.post('/upload', upload.single('file'), (req, res, next) => {
  if (!req.file) return res.status(400).send('file이 있는지 확인해주세요 ㅅㄱ');
  return res.status(201).json({ file: req.file });
});

app.post('/presigned_url', async (req, res, next) => {
  const { fileName } = req.body;
  if (!fileName) return res.status(400).send('fileName이 있는지 확인해주세요');
  const presignedURL = await getPresignedUrl(fileName);
  return res.status(200).json({ presignedURL });
});

app.listen(4444);
