const AWS = require('aws-sdk');
require('dotenv').config();

const S3 = new AWS.S3({
  region: 'ap-northeast-2',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_ACCESS_SECRET_KEY,
  },
});

const getPresignedUrl = async (fileName) => {
  const params = {
    Bucket: 'seojinseojin-dummy',
    Key: fileName,
    Expires: 60 * 60 * 3,
    ACL: 'public-read',
  };

  const signedUrlPut = await S3.getSignedUrlPromise('putObject', params);
  return signedUrlPut;
};

module.exports = getPresignedUrl;
