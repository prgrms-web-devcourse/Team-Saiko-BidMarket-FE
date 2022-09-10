import { ArrowUpIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';

interface ChatInputProps {
  onSubmit: (nextMessage: string) => void;
}

const ChatInput = ({ onSubmit }: ChatInputProps) => {
  const [chatMessage, setChatMessage] = useState('');
  const sendChatMessage = () => {
    onSubmit(chatMessage);
    setChatMessage('');
  };
  const handleKeyup = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendChatMessage();

      return;
    }
  };

  return (
    <InputGroup size="md">
      <Input
        value={chatMessage}
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
        onChange={(e) => setChatMessage(e.target.value)}
      />
      <InputRightElement width="4.5rem">
        <IconButton
          h="1.75rem"
          size="lg"
          aria-label="arrow-icon"
          icon={<ArrowUpIcon />}
          backgroundColor="#EFEFEF"
          onClick={sendChatMessage}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default ChatInput;
