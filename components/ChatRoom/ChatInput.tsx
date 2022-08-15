import { ArrowUpIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

interface ChatInputProps {
  onSubmit: (nextMessage: string) => void;
}

const ChatInput = ({ onSubmit }: ChatInputProps) => {
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
        onKeyUp={handleKeyup}
      />
      <InputRightElement width="4.5rem">
        <IconButton
          h="1.75rem"
          size="lg"
          aria-label="arrow-icon"
          icon={<ArrowUpIcon />}
          backgroundColor="#EFEFEF"
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default ChatInput;
