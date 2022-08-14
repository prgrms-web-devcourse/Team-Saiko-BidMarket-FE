import { ArrowUpIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useState } from 'react';

interface ChatInputProps {
  onSubmit: (nextMessage: string) => void;
}

const ChatInput = ({ onSubmit }: ChatInputProps) => {
  const [visible, setVisible] = useState(true);
  const handleKeyup = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLInputElement;

      onSubmit(target.value);
      target.value = '';

      return;
    }
  };

  return (
    <InputGroup size="md">
      <Input
        width="100%"
        height="48px"
        bgColor="#EFEFEF"
        border="0.7px solid #EFEFEF"
        borderRadius="30px"
        placeholder="메세지를 입력해주세요."
        _placeholder={{
          color: '#ACACAC',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '15px',
          lineHeight: '120%',
        }}
        focusBorderColor="brand.primary-900"
        onFocus={() => setVisible(false)}
        onBlur={() => setVisible(true)}
        onKeyUp={handleKeyup}
      />
      {visible && (
        <InputRightElement pointerEvents="none" paddingRight="16px">
          <ArrowUpIcon width="22px" height="22px" alignSelf="center" />
        </InputRightElement>
      )}
    </InputGroup>
  );
};

export default ChatInput;
