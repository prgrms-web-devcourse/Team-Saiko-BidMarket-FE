import { Input } from '@chakra-ui/react';
import axios from 'axios';
import { ChangeEvent, useRef, useState } from 'react';

import AddProductImage from './AddProductImage';

interface ImageUploadProps {
  name: string;
  productImageArray: string[];
  setProductImageArray: React.Dispatch<React.SetStateAction<string[]>>;
}

// const BUCKET_URL = process.env.BUCKET_URL;
const BUCKET_URL = 'https://bid-market-bucket.s3.ap-northeast-2.amazonaws.com';
const FOLDER_NAME = 'products';

const AddProductImageUpload = ({
  name,
  productImageArray,
  setProductImageArray,
}: ImageUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [productImageUrls, setProductImageUrls] = useState<Array<string>>([]);

  const handleChooseFile = () => {
    inputRef.current && inputRef.current.click();
  };

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList;
    const imageUrls = [] as Array<string>;

    if (!files || files.length === 0) {
      return;
    }

    [...files].forEach(async (file) => {
      await uploadImage(file);
      const uploadedUrl = `${BUCKET_URL}/${FOLDER_NAME}/${file.name}`;
      imageUrls.push(uploadedUrl);
    });

    setProductImageUrls(
      [...files].map((file) => {
        return `${BUCKET_URL}/${FOLDER_NAME}/${file.name}`;
      })
    );

    setProductImageArray(
      [...files].map((file) => {
        return `${BUCKET_URL}/${FOLDER_NAME}/${file.name}`;
      })
    );
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

  const handleClickDeleteButton = (ImageURL: string) => {
    setProductImageUrls(
      [...productImageUrls].filter(
        (productImageUrl) => productImageUrl !== ImageURL
      )
    );

    setProductImageArray(
      [...productImageArray].filter(
        (productImageUrl) => productImageUrl !== ImageURL
      )
    );
  };

  return (
    <>
      <Input
        ref={inputRef}
        display="none"
        type="file"
        name={name}
        accept="image/*"
        multiple
        onChange={handleChange}
      />

      <AddProductImage
        productImageUrls={productImageArray}
        onClick={handleChooseFile}
        onRemove={handleClickDeleteButton}
      />
    </>
  );
};

export default AddProductImageUpload;
