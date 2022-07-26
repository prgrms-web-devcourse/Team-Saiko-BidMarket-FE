import { Input } from '@chakra-ui/react';
import axios from 'axios';
import getConfig from 'next/config';
import { ChangeEvent, useRef, useState } from 'react';

import AddProductImage from './AddProductImage';
const { publicRuntimeConfig } = getConfig();

interface ImageUploadProps {
  name: string;
  productImageArray: string[];
  setProductImageArray: React.Dispatch<React.SetStateAction<string[]>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BUCKET_URL = publicRuntimeConfig.bucketUrl;
const FOLDER_NAME = 'products';

const AddProductImageUpload = ({
  name,
  productImageArray,
  setProductImageArray,
  handleChange: onChange,
}: ImageUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [productImageUrls, setProductImageUrls] = useState<Array<string>>([]);

  const handleChooseFile = () => {
    inputRef.current && inputRef.current.click();
  };

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList;

    if (!files || files.length === 0) {
      return;
    }

    for (const file of files) {
      await uploadImage(file);
    }

    [...files].forEach(async (file) => {
      await uploadImage(file);
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
