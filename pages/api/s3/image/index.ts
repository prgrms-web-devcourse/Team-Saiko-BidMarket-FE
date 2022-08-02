import S3 from 'aws-sdk/clients/s3';
import { NextApiRequest, NextApiResponse } from 'next';

const s3 = new S3({
  region: 'ap-northeast-2',
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  signatureVersion: 'v4',
});

console.log(process.env.ACCESS_KEY);

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '8mb',
    },
  },
};

const uploadImageApi = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, type } = req.body;

    const imageParameters = {
      Bucket: process.env.BUCKET_NAME,
      Key: name,
      Expires: 600,
      ContentType: type,
      ACL: 'public-read',
    };

    const url = await s3.getSignedUrlPromise('putObject', imageParameters);

    res.status(200).json({ url });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
};

export default uploadImageApi;
