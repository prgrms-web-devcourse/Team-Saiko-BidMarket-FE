import { Input } from '@chakra-ui/react';
import { ChangeEvent, useRef, useState } from 'react';

import AddProductImage from './AddProductImage';

interface ImageUploadProps {
  name: string;
  productImageUrl: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AddProductImageUpload = ({
  name,
  productImageUrl,
  onChange,
}: ImageUploadProps) => {
  const [previewImageUrl, setPreviewImageUrl] =
    useState<string>(productImageUrl);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChooseFile = () => {
    inputRef.current && inputRef.current.click();
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files) {
      return;
    }

    const url = URL.createObjectURL(files[0]);
    e.target.dataset.url = url;

    setPreviewImageUrl(url);
    onChange(e);
  };

  return (
    <>
      <Input
        ref={inputRef}
        display="none"
        type="file"
        name={name}
        accept="image/*"
        data-url={previewImageUrl}
        onChange={handleChange}
      />
      <AddProductImage
        productImageUrl={previewImageUrl}
        onClick={handleChooseFile}
      />
    </>
  );
};

export default AddProductImageUpload;
