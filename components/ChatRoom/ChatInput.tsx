import { Input } from '@chakra-ui/react';

interface ChatInputProps {
  onSubmit: (nextMessage: string) => void;
}

// TODO: 비행기? 아이콘 추가 왼쪽에 + 버튼도??
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
      onKeyUp={handleKeyup}
    />
  );
};

export default ChatInput;
