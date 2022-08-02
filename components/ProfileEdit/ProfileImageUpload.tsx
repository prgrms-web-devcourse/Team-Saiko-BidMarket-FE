import { Input } from '@chakra-ui/react';
import axios from 'axios';
import { ChangeEvent, useRef, useState } from 'react';

import { ProfileImage } from '.';

interface ImageUploadProps {
  name: string;
  profileImageUrl: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const BUCKET_URL = 'https://bid-market-bucket.s3.ap-northeast-2.amazonaws.com';

const ProfileImageUpload = ({
  name,
  profileImageUrl: defaultProfileImageUrl,
  onChange,
}: ImageUploadProps) => {
  const [profileImageUrl, setProfileImageUrl] = useState<string>(
    defaultProfileImageUrl
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChooseFile = () => {
    inputRef.current && inputRef.current.click();
  };
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files) {
      return;
    }

    const changedImageFile = files[0];

    await uploadImage(changedImageFile);

    const url = `${BUCKET_URL}/${changedImageFile.name}`;

    e.target.dataset.url = url;
    setProfileImageUrl(url);
    onChange(e);
  };
  const uploadImage = async (imageFile: File) => {
    try {
      const { data } = await axios.post('/api/s3/image', {
        name: imageFile.name,
        type: imageFile.type,
      });

      const { url } = data;

      await axios.put(url, imageFile, {
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
        data-url={profileImageUrl}
        onChange={handleChange}
      />
      <ProfileImage
        propfileImageUrl={profileImageUrl}
        onClick={handleChooseFile}
      />
    </>
  );
};

export default ProfileImageUpload;
