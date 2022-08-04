import { Input } from '@chakra-ui/react';
import { ChangeEvent, useRef, useState } from 'react';

interface AddProductLocationProps {
  inputLocation: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AddProductLocation = ({
  inputLocation,
  onChange,
}: AddProductLocationProps) => {
  const [visible, setVisible] = useState(true);

  return (
    <Input
      name={inputLocation}
      onChange={onChange}
      onFocus={() => setVisible(false)}
      onBlur={() => setVisible(true)}
      placeholder="희망 거래 지역"
      border="1px"
      borderColor="#B6B6B6"
      w="100%"
      h="50px"
      maxLength={20}
    />
  );
};

export default AddProductLocation;
