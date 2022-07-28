import { EditIcon } from '@chakra-ui/icons';
import { Flex, InputGroup, Input, InputRightElement } from '@chakra-ui/react';
import { ChangeEvent } from 'react';

interface NicknameInputProps {
  name: string;
  nickName: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const NicknameInput = ({ name, nickName, onChange }: NicknameInputProps) => {
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
          variant="flushed"
          size="lg"
          placeholder="물안경"
          border="0.7px solid #BFBFBF"
          borderRadius="10px"
          paddingLeft="23px"
          name={name}
          value={nickName}
          onChange={onChange}
        />
        <InputRightElement paddingRight="16px">
          <EditIcon width="22px" height="22px" alignSelf="center" />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default NicknameInput;
