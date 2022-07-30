import { EditIcon } from '@chakra-ui/icons';
import { Flex, InputGroup, Input, InputRightElement } from '@chakra-ui/react';
import { ChangeEvent, useRef, useState } from 'react';

interface NicknameInputProps {
  inputName: string;
  nickname: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const NicknameInput = ({
  inputName,
  nickname,
  onChange,
}: NicknameInputProps) => {
  const [visible, setVisible] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFocus = () => setVisible(false);
  const handleBlur = () => setVisible(true);

  return (
    <Flex
      flexGrow="1"
      width="100%"
      paddingRight="19px"
      paddingLeft="19px"
      height="70%"
    >
      <InputGroup size="md">
        <Input
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
          variant="flushed"
          size="lg"
          defaultValue={nickname}
          placeholder="수정할 닉네임을 입력해주세요"
          border="0.7px solid #BFBFBF"
          borderRadius="10px"
          paddingLeft="23px"
          name={inputName}
          onChange={onChange}
        />
        {visible && (
          <InputRightElement pointerEvents="none" paddingRight="16px">
            <EditIcon width="22px" height="22px" alignSelf="center" />
          </InputRightElement>
        )}
      </InputGroup>
    </Flex>
  );
};

export default NicknameInput;
