import { Input } from '@chakra-ui/react';
import { ChangeEvent, useRef, useState } from 'react';
import { ProfileImage } from '.';

interface ImageUploadProps {
  name: string;
  profileImageUrl: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ProfileImageUpload = ({
  name,
  profileImageUrl,
  onChange,
}: ImageUploadProps) => {
  const [previewImageUrl, setPreviewImageUrl] =
    useState<string>(profileImageUrl);
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
    // TODO: S3에서 받아오는 값 넣어주기
    e.target.value = url;

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
        onChange={handleChange}
      />
      <ProfileImage
        propfileImageUrl={previewImageUrl}
        onClick={handleChooseFile}
      />
    </>
  );
};

export default ProfileImageUpload;
