import { Input } from '@chakra-ui/react';
import axios from 'axios';
import { ChangeEvent, useRef, useState } from 'react';

import AddProductImage from './AddProductImage';

interface ImageUploadProps {
  name: string;
  productImageUrl: string;
  productImageArray: string[];
  setProductImageArray: any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

// const BUCKET_URL = process.env.BUCKET_URL;
const BUCKET_URL = 'https://bid-market-bucket.s3.ap-northeast-2.amazonaws.com';
const FOLDER_NAME = 'products';

const AddProductImageUpload = ({
  name,
  productImageUrl: defaultProductImageUrl,
  productImageArray,
  setProductImageArray,
  onChange,
}: ImageUploadProps) => {
  const [productImageUrl, setProductImageUrl] = useState<string>(
    defaultProductImageUrl
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChooseFile = () => {
    inputRef.current && inputRef.current.click();
  };
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList;

    if (!files || files.length === 0) {
      return;
    }

    Array(files.length)
      .fill(0)
      .forEach(async (_, index) => {
        const file = files[index];
        if (file) {
          await uploadImage(file);
          const uploadedUrl = `${BUCKET_URL}/${FOLDER_NAME}/${file.name}`;
          setProductImageArray([...productImageArray, uploadedUrl]);
          e.target.dataset.url = uploadedUrl;
          setProductImageUrl(uploadedUrl);
        }
      });

    onChange(e);
  };

  const uploadImage = async (imageFile: File) => {
    try {
      const { data } = await axios.post('/api/s3/image', {
        name: `${FOLDER_NAME}/${imageFile.name}`,
        type: imageFile.type,
      });

      const { signedUrl } = data;

      await axios.put(signedUrl, imageFile, {
        headers: {
          'Content-Type': imageFile.type,
          'Access-Control-Allow-Origin': '*',
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Input
        ref={inputRef}
        display="none"
        type="file"
        name={name}
        accept="image/*"
        data-url={productImageUrl}
        onChange={handleChange}
      />

      <AddProductImage
        productImageUrl={productImageUrl}
        productImageArray={productImageArray}
        onClick={handleChooseFile}
      />
    </>
  );
};

export default AddProductImageUpload;
